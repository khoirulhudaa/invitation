import { AxiosResponse } from 'axios';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import API from '../../services/api';
import store from '../../store/store';
import { paymentInterface } from '../interfaces/paymentInterface';


export const usePayment = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

    const payment: any = store.getState().paymentSlice.payment[0]
    
    const formik = useFormik<paymentInterface>({
        initialValues: {
            Semesteran: 0,
            UP: 0,
            UAS: 0,
            UTS: 0,
            Sertifikasi: 0,
            PKKMB: 0,
            Kantin: 0,
            note_Semesteran: '',
            note_UAS: '',
            note_UTS: '',
            note_Sertifikasi: '',
            note_PKKMB: '',
            note_Kantin: '',
            note_UP: ''
        },
        validationSchema: Yup.object({
            Semesteran: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
            UP: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
            UAS: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
            UTS: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
            Sertifikasi: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
            PKKMB: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
            Kantin: Yup.number()
            .min(9999, 'Minimal nominal Rp. 10.000')
            .max(9999999, 'Maksimal nominal Rp. 9.999.999')
            .notRequired(),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                const body = [
                    { type_payment: 'Semesteran', minimum_payment: values.Semesteran, note: values.note_Semesteran },
                    { type_payment: 'UP', minimum_payment: values.UP, note: values.note_UP },
                    { type_payment: 'UAS', minimum_payment: values.UAS, note: values.note_UAS },
                    { type_payment: 'UTS', minimum_payment: values.UTS, note: values.note_UTS },
                    { type_payment: 'PKKMB', minimum_payment: values.PKKMB, note: values.note_PKKMB},
                    { type_payment: 'Kantin', minimum_payment: values.Kantin, note: values.note_Kantin },
                    { type_payment: 'Sertifikasi', minimum_payment: values.Sertifikasi, note: values.note_Sertifikasi },
                ]

                const response: AxiosResponse = await API.updatePaymentMethodByShop(body)
                if(response.data.status === 200) {
                    onResponse(response.data.status)
                }else {
                    onError(response.data.message)
                }

            } catch (error: any) {
                onError(error.data.message)
            }
        }
    })

    useEffect(() => {
        console.log('d', payment[4].minimum_payment)
        formik.setValues({
            Semesteran: payment ? payment[4].minimum_payment : 0,
            UP: payment ? payment[2].minimum_payment : 0,
            UAS: payment ? payment[0].minimum_payment : 0,
            UTS: payment ? payment[5].minimum_payment : 0,
            Sertifikasi: payment ? payment[3].minimum_payment : 0,
            PKKMB: payment ? payment[6].minimum_payment : 0,
            Kantin: payment ? payment[1].minimum_payment : 0,
            note_Semesteran: payment ? payment[4].note_payment : '',
            note_UP: payment ? payment[2].note_payment : '',
            note_UAS: payment ? payment[0].note_payment : '',
            note_UTS: payment ? payment[5].note_payment : '',
            note_PKKMB: payment ? payment[6].note_payment : '',
            note_Sertifikasi: payment ? payment[3].note_payment : '',
            note_Kantin: payment ? payment[1].note_payment : '',
        });
    }, [payment]);

    return formik
}