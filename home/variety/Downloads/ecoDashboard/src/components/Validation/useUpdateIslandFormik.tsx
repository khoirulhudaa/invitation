import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useIslandUpdateFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
   
   const detailIsland = store.getState().Information?.detailIsland

    const formik = useFormik<any>({
        initialValues: {
            name_island: '',
        },
        validationSchema: Yup.object({
            name_island: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                console.log('data:', values)

                console.log(detailIsland?.island_id)
                
                const response = await API.updateIsland(detailIsland?.island_id, values)
                console.log('response update island:', response)

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
            name_island: detailIsland?.name_island ?? '',
        })
    }, [detailIsland])

    return formik
}