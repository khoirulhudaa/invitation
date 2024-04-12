import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useAuthSignUpFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .min(4, 'Minimal 4 karakter')
            .required('Tidak boleh kosong!'),
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
                
                const response = await API.createAccount(values)
                console.log('response:', response)

                if(response.data.status === 200) {  
                    onResponse(response.data.status)
                    resetForm()
                }else {
                    onError(response.data.message)
                }
            } catch (error: any) {
                onError(error.message)
            }
        }
    })

    return formik
}