import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useTourUpdateFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
   
   const detailTour = store.getState().Information?.detailTour

    const formik = useFormik<any>({
        initialValues: {
            name_location: '',
            island: '',
            lat: '',
            long: '',
            address: '',
            link: '',
            thumbnail: '',
        },
        validationSchema: Yup.object({
            name_location: Yup.string()
            .required('Tidak boleh kosong!'),
            island: Yup.string()
            .required('Tidak boleh kosong!'),
            lat: Yup.string()
            .required('Tidak boleh kosong!'),
            long: Yup.string()
            .required('Tidak boleh kosong!'),
            address: Yup.string()
            .required('Tidak boleh kosong!'),
            link: Yup.string()
            .required('Tidak boleh kosong!'),
            thumbnail: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                console.log('data:', values)

                const body = {
                    name_article: values.name_article,
                    content: values.content,
                }

                console.log(detailTour?.tour_id)
                
                const response = await API.updateTour(detailTour?.tour_id, body)
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
            name_location: detailTour?.name_location ?? '',
            island: detailTour?.island ?? '',
            lat: detailTour?.lat ?? '',
            long: detailTour?.long ?? '',
            address: detailTour?.address ?? '',
            link: detailTour?.link ?? '',
            thumbnail: detailTour?.thumbnail ?? '',
        })
    }, [detailTour])

    return formik
}