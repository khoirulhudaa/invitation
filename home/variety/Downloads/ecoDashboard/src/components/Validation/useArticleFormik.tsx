import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useArticleFormik = ({onError, onResponse, content}: {onError?: any, onResponse?: any, content?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            name_article: '',
        },
        validationSchema: Yup.object({
            name_article: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {

                const body = {
                    name_article: values.name_article,
                    content
                }
                
                const response = await API.addArticle(body)
                console.log('response create article:', response)

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