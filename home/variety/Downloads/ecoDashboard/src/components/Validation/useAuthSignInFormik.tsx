import { authSignIn, saveToken } from '@/redux/authSlice';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import API from '../../services/services';

export const useAuthSignInFormik = ({onError, onResponse}: {onError?: any, onResponse: any}) => {
    
    const navigate = useRouter()
    const dispatch = useDispatch()
    
    const formik = useFormik<any>({
        initialValues: {
            email: '',
            password: null,
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Format email tidak sesuai!')
            .required('Tidak boleh kosong!'),
            password: Yup.string()
            .min(5, 'Minimal 5 karakter!')
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                console.log('data:', values)
                
                const response = await API.checkAccount(values)
                console.log('response auth:', response?.data)

                if(response.data.status === 200) {
                    console.log(response)
                    dispatch(authSignIn(response?.data?.data))  
                    dispatch(saveToken(response?.data?.token))
                    onResponse(response.status)
                    navigate.push('/dashboard')
                    resetForm()
                }else {
                    onError(response.data.message)
                    resetForm()
                }
            } catch (error: any) {
                onError(error.message)
                resetForm()
            }
        }
    })

    return formik
}