import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useArticleUpdateFormik = ({onError, onResponse, contentNew}: {onError?: any, onResponse?: any, contentNew?: any}) => {
   
   const detailArticle = store.getState().Information?.detailArticle

    const formik = useFormik<any>({
        initialValues: {
            name_article: '',
            content: '',
        },
        validationSchema: Yup.object({
            name_article: Yup.string()
            .required('Tidak boleh kosong!'),
            content: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                console.log('data:', values)

                const body = {
                    name_article: values.name_article,
                    content: contentNew,
                }

                console.log(detailArticle?.article_id)
                
                const response = await API.updateArticle(detailArticle?.article_id, body)
                console.log('response update article:', response)

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

    useEffect(() => {
        formik.setValues({
            name_article: detailArticle?.name_article ?? '',
            content: detailArticle?.content ?? '',
        })
    }, [detailArticle])

    return formik
}