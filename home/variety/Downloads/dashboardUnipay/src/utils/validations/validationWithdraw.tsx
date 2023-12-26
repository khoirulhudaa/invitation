import { useFormik } from 'formik';
import * as Yup from 'yup';
import toRupiah from '../../helpers/toRupiah';
import API from '../../services/api';
import store from '../../store/store';
import { paymentInterface } from '../interfaces/paymentInterface';

export const useWithdrawFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {

    const balance = store.getState().paymentSlice.balance

    console.log('balacknce', balance)

    const formik = useFormik<paymentInterface>({
        initialValues: {
            bank_code: '',
            account_number: 0,
            amount: 0,
            description: ''
        },
        validationSchema: Yup.object({
            bank_code: Yup.string()
            .required(),
            account_number: Yup.number()
            .max(9999999999999999, 'Maximum only 16 characters.')
            .min(9999999999, 'Minimal must 10 characters.')
            .required(),
            amount: Yup.number()
            .min(9999, 'Minimal must Rp. 10.000.')
            .required(),
            description: Yup.string()
            .required('This is field required!')
            .max(200, 'Maximal only 16 characters.')
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                const data = {
                    channelCode: values.bank_code,
                    accountNumber: values.account_number,
                    amount: values.amount,
                    accountHolderName: 'Admin kampus',
                    description: values.description
                }

                console.log('values:', data)

                if (values.amount > balance) {
                    // Display error message for exceeding balance
                    formik.setErrors({ amount: `Withdraw maximal ${toRupiah(balance)}` });
                    return; // Prevent further processing
                }

                const response = await API.disbursementAdmin(data)
                if(response.data.status === 200) {
                    resetForm()
                    onResponse(response.data.status)
                } else {
                    onError(response.data.message)
                }

            } catch (error: any) {
                onError(error.data.message)
            }
        }
    })

    return formik
}