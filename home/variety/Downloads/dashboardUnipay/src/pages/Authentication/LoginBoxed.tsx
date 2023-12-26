import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormGroup from '../../components/formGroup';
import { authSignOut } from '../../store/authSlice';
import { setPageTitle } from '../../store/themeConfigSlice';

const LoginBoxed = () => {
    
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setPageTitle('Login Boxed'));
        dispatch(authSignOut())
    }, [])
    

    const handleErrorMessage = (error: string) => {
        setErrorMessage(error)
    }

    const handleResponseMessage = (response: number) => {
        console.log(response)
    }

    return (
        <div className="relative md:overflow-hidden flex justify-center items-center min-h-screen bg-cover bg-center">
            <img 
                src='/assets/images/Card.svg'
                className='absolute transform w-[170%] opacity-[0.5]'
            />
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-[15px] mt-5">Sign In</h2>
                <p className="mb-7">Enter your email and password to login</p>
                <FormGroup error={errorMessage} handleErrorMessage={handleErrorMessage} handleResponse={handleResponseMessage} type='signIn' />
                <div className='flex items-center justify-center mt-6'>
                    <p className="text-center">
                        Dont&apos;t have an account ?
                        <Link to="/auth/signup" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginBoxed;
