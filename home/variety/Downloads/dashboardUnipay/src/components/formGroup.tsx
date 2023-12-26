import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { usePayment } from "../utils/validations/paymentValidation"
import { useLoginFormik } from "../utils/validations/validationLogin"
import { useRegistrationFormik } from "../utils/validations/validationRegister"
import Button from "./button"
import ErrorMessage from "./errorMessage"
import InputField from "./inputField"

interface formGroupProps {
    type?: string,
    handleErrorMessage?: (args: string) => void,
    handleResponse?: (args: any) => void,
    onClick?: () => void,
    error?: string,
}

const FormGroup = ({ 
    type, 
    handleErrorMessage, 
    handleResponse,
    error,
}: formGroupProps) => {

const formik = useRegistrationFormik({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

const formikSignIn = useLoginFormik({ 
    onError: handleErrorMessage,
})

const formikPayments = usePayment({ 
    onError: handleErrorMessage, 
    onResponse: handleResponse 
})

switch(type) {
    case "signIn":
        return (
            <form className="space-y-5" onSubmit={formikSignIn.handleSubmit}>
                {
                    error !== '' ? (
                        <ErrorMessage error={error} />
                    ):
                        null
                }
                <div>
                    <InputField 
                        value={formikSignIn.values.email_admin} 
                        name='email_admin' 
                        label='email'
                        onError={formikSignIn.errors.email_admin}
                        onTouched={!!formikSignIn.touched.email_admin}
                        onChange={formikSignIn.handleChange} 
                        onBlur={formikSignIn.handleBlur} 
                        placeholder="Enter Email" 
                    />
                </div>
                <div>
                    <InputField 
                        value={formikSignIn.values.password} 
                        name='password' 
                        label='password'
                        type='password'
                        onError={formikSignIn.errors.password}
                        onTouched={!!formikSignIn.touched.password}
                        onChange={formikSignIn.handleChange} 
                        onBlur={formikSignIn.handleBlur} 
                        placeholder="Enter Password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    SIGN IN
                </button>
            </form>
        )
    case "payment-methods":
        return (
            <form onSubmit={formikPayments.handleSubmit}>
                {
                    error !== '' ? (
                        <ErrorMessage error={error} />
                    ):
                        null
                }
                <div className='w-full flex flex-col items-center justify-between'>
                    <div className='w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img 
                        src='/assets/images/building.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran semesteran'
                            name='Semesteran'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.Semesteran}
                            onError={formikPayments.errors.Semesteran}
                            onTouched={formikPayments.touched.Semesteran}
                        />
                        <div className='my-5'>
                            <InputField
                                id='note_Semesteran'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_Semesteran || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_Semesteran', editor.getData());
                                }}
                            />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                    <div className='w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img
                        src='/assets/images/UP.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran ujian perbaikan'
                            name='UP'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.UP}
                            onError={formikPayments.errors.UP}
                            onTouched={formikPayments.touched.UP}
                        />
                        <div className='my-5'>
                            <InputField
                                id='note_UP'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_UP || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_UP', editor.getData());
                                }}
                            />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-between'>
                    <div className='w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img
                        src='/assets/images/test.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran UAS'
                            name='UAS'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.UAS}
                            onError={formikPayments.errors.UAS}
                            onTouched={formikPayments.touched.UAS}
                        />
                          <div className='my-5'>
                            <InputField
                                id='note_UAS'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_UAS || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_UAS', editor.getData());
                                }}
                            />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                    <div className='w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img
                        src='/assets/images/test.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran UTS'
                            name='UTS'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.UTS}
                            onError={formikPayments.errors.UTS}
                            onTouched={formikPayments.touched.UTS}
                        />
                        <div className='my-5'>
                            <InputField
                                id='note_UTS'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_UTS || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_UTS', editor.getData());
                            }}
                        />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-between'>
                    <div className='w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img
                        src='/assets/images/sertification.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran sertifikasi'
                            name='Sertifikasi'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.Sertifikasi}
                            onError={formikPayments.errors.Sertifikasi}
                            onTouched={formikPayments.touched.Sertifikasi}
                        />
                        <div className='my-5'>
                            <InputField
                                id='note_Sertifikasi'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_Sertifikasi || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_Sertifikasi', editor.getData());
                                }}
                            />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                    <div className='w-full m-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img
                        src='/assets/images/pkkmb.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran PKKMB'
                            name='PKKMB'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.PKKMB}
                            onError={formikPayments.errors.PKKMB}
                            onTouched={formikPayments.touched.PKKMB}
                        />
                          <div className='my-5'>
                            <InputField
                                id='note_PKKMB'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_PKKMB || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_PKKMB', editor.getData());
                                }}
                            />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full my-4 h-max border border-slate-400 rounded-[12px] px-6 py-4'>
                    <img
                        src='/assets/images/canteen.png'
                        alt="icon"
                        className='w-[8%] relative left-[-10px] mb-5'
                    />
                        <InputField 
                            label='Nominal pembayaran kantin'
                            name='Kantin'
                            type='number'
                            onChange={formikPayments.handleChange}
                            onBlur={formikPayments.handleBlur}
                            value={formikPayments.values.Kantin}
                            onError={formikPayments.errors.Kantin}
                            onTouched={formikPayments.touched.Kantin}
                        />
                        <div className='my-5'>
                            <InputField
                                id='note_Kantin'
                                label='Ketarangan'
                                typeInput='ckEditor'
                                datackEditor={formikPayments.values.note_Kantin || ''}
                                onChangeCKEditor={(event: any, editor: any) => {
                                    formikPayments.setFieldValue('note_Kantin', editor.getData());
                                }}
                            />
                        </div>
                        <div className='h-3'></div>
                        <Button text='Simpan' typeButton='submit' />
                    </div>
                </div>
            </form>
        )
    default :
        return (
            <form className="space-y-5" onSubmit={formik.handleSubmit}>
            {
                error !== '' ? (
                    <ErrorMessage error={error} />
                ):
                    null
            }
            <div>
                <InputField 
                    value={formik.values.admin_name} 
                    name='admin_name' 
                    label='seller name'
                    id='sellerName'
                    onError={formik.errors.admin_name}
                    onTouched={!!formik.touched.admin_name}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    placeholder="Enter Your Name" 
                />
            </div>
            <div>
                <InputField 
                    value={formik.values.email_admin} 
                    name='email_admin' 
                    label='email'
                    id='email'
                    onError={formik.errors.email_admin}
                    onTouched={!!formik.touched.email_admin}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    placeholder="Enter Email" 
                />
            </div>
            <div>
                <InputField 
                    value={formik.values.password} 
                    name='password' 
                    id='password'
                    label='password'
                    type='password'
                    onError={formik.errors.password}
                    onTouched={!!formik.touched.password}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    placeholder="Enter Password" 
                />
            </div>
            <div>
                <InputField 
                    value={formik.values.telephone_admin} 
                    name='telephone_admin' 
                    label='Number Telephone'
                    id='telephone'
                    onError={formik.errors.telephone_admin}
                    onTouched={!!formik.touched.telephone_admin}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    placeholder="Your number" 
                />
            </div>
            <button type="submit" className="btn btn-primary w-full">
                Daftar
            </button>
        </form>
        )
  }
}

export default FormGroup
