"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import SweetAlert from '../SweetAlert';
import { useAuthSignUpFormik } from '../Validation/useAuthSignUpFormik';
import ErrorMessage from '../ErrorMessage';
import { FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const AddUser: React.FC = () => {

    const navigate = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleResponseUser = () => {
        setError('')
        SweetAlert({
            title: 'Berhasil tambah pengguna!',
            showCancelButton: false,
            icon: 'success'
        })
        stopLoading()
        navigate.push('/users')
    }

    const stopLoading = () => {
        setLoading(false)
    }
    
    const handleErrorMessage = (error: string) => {
        setError(error)
        stopLoading()
    }

    const accountFormik = useAuthSignUpFormik({
        onError: handleErrorMessage,
        onResponse: handleResponseUser
    })

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                Penambahan Pengguna Baru
            </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
            {
                error !== '' ? (
                    <ErrorMessage error={error} />
                ):
                    null
            }
            <form onSubmit={accountFormik.handleSubmit}>
                <div className='mb-5'>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nama Pengguna
                    </label>
                    <input
                        type="text"
                        name='username'
                        value={accountFormik.values.username}
                        onChange={accountFormik.handleChange}
                        onBlur={accountFormik.handleBlur}
                        placeholder="Muhammad Khoirulhuda"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className='mb-5'>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email Pengguna
                    </label>
                    <input
                        type="email"
                        name='email'
                        value={accountFormik.values.email}
                        onChange={accountFormik.handleChange}
                        onBlur={accountFormik.handleBlur}
                        placeholder="user@example.com"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className='mb-5'>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Password
                    </label>
                    <input
                        type="text"
                        name='password'
                        value={accountFormik.values.password}
                        onChange={accountFormik.handleChange}
                        onBlur={accountFormik.handleBlur}
                        placeholder="123xxxxx"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className='w-max flex items-center'>
                    <Link href={'/users'}>
                        <button type='button' className='putline-0 mr-3 w-max h-max rounded-lg flex items-center justify-center cursor-pointer border border-red-300 active:scale-[0.98] hover:brightness-[90%] px-5 py-[6px] shadow-md text-red bg-white mt-6'>
                            <p>Batalkan</p>
                        </button>
                    </Link>
                    {
                        accountFormik.values.email !== '' && accountFormik.values.username !== '' && accountFormik.values.password !== '' ? (
                            <button type={loading  ? 'button' : 'submit'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md ${loading ? 'text-slate-500 bg-slate-200 cursor-not-allowed' : 'text-white bg-blue-400 cursor-pointer active:scale-[0.98] hover:brightness-[90%]'} mt-6`}>
                                {
                                    loading ? (
                                        <FaSpinner className='mr-2 duration-200 animate-spin' />
                                    ):
                                        null
                                }
                                <p>Tambah Sekarang</p>
                            </button>
                        ) :                 
                            <button type={'button'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md 'text-slate-500 bg-slate-200 cursor-not-allowed mt-6`}>
                                <p>Tambah Sekarang</p>
                            </button>
                    }
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddUser;
