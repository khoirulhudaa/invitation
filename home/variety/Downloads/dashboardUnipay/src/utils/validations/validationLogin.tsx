import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import API from '../../services/api';
import { authSignIn, saveToken } from '../../store/authSlice';
import { signAdminInterface } from '../interfaces/signAdminInterface';

export const useLoginFormik = ({onError}: {onError?: any}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik<signAdminInterface>({
        initialValues: {
            email_admin: '',
            password: ''
        },
        validationSchema: Yup.object({
            email_admin: Yup.string()
            .email('Invalid email address')
            .required('This field is required.'),
            password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('This field is required.')
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                const response = await API.checkAccountadmin(values)
                if(response.data.status === 401 || response.data.status === 404) {  
                    onError(response.data.message)
                }else {
                    dispatch(authSignIn(response.data.data))
                    dispatch(saveToken(response.data.token))
                    resetForm()
                    navigate('/')
                }
                
            } catch (error: any) {
                onError(error.message)
            }
        }
    })

    return formik
}