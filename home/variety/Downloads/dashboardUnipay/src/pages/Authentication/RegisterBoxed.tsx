import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SweetAlert from '../../components/alertBox';
import FormGroup from '../../components/formGroup';
import { setPageTitle } from '../../store/themeConfigSlice';

const RegisterBoxed = () => {
    
    const [errorMessage, setErrorMessage] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleErrorMessage = (error: string) => {
        setErrorMessage(error)
    }

    const handleResponseMessage = (response: number) => {
        if(response === 200) {
            setErrorMessage("")
            SweetAlert({
              text:'Berhasil daftar',
              title: 'Success',
              confirmButtonText: 'Lanjut',
              showCancelButton: false,
              icon: 'success',
              route: '/auth/signin',
              navigate
            })
          }
    }

    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    });

    return (
        <div>
            <div className="relative md:overflow-hidden flex justify-center items-center min-h-screen bg-cover bg-center">
                <img 
                    src='/assets/images/Card.svg'
                    className='absolute transform w-[170%] opacity-[0.5]'
                />
                <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-[15px] mt-5">Sign Up</h2>
                    <p className="mb-7">Lets go join with ElectShop</p>
                    <FormGroup error={errorMessage} handleErrorMessage={handleErrorMessage} handleResponse={handleResponseMessage} />
                    <p className="text-center mt-6">
                        Already have an account ?
                        <Link to="/auth/signin" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterBoxed;
