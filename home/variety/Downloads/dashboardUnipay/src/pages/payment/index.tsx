import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SweetAlert from '../../components/alertBox'
import FormGroup from '../../components/formGroup'
import API from '../../services/api'
import { getAllPaymentByShop } from '../../store/paymentSlice'

const Payment = () => {

    const [errorMessage, setErrorMessage] = useState<string>('')
    const [update, setUpdate] = useState<boolean>(false)

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const responsePayments = await API.getAllPayments()
            dispatch(getAllPaymentByShop(responsePayments.data.data[0].payments))
            console.log('payment list:', responsePayments)
        })()
    }, [update, dispatch])

    const handleErrorMessage = (error: string) => {
        setErrorMessage(error)
    }

    const handleResponseMessage = (response: number) => {
        setUpdate(true)
        if(response === 200) {
            SweetAlert({
                title: 'Success',
                icon: 'success',
                text: 'Berhasil perbarui pembayaran!',
                showCancelButton: false,
                confirmButtonText: 'Lanjut'
            })
        }
    }


  return (
    <div className='w-full flex flex-col'>
        <div className='bg-white rounded-lg py-6 px-5 shadow-md'>
            <h5 className="font-semibold mb-2 text-lg dark:text-white-light">Data sistem pembayaran</h5>
            <FormGroup type='payment-methods' handleErrorMessage={(e: string) => handleErrorMessage(e)} handleResponse={(e: number) => handleResponseMessage(e)} error={errorMessage} />
        </div>
    </div>
  )
}

export default Payment
