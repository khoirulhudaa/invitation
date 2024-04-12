"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ErrorMessage from '../ErrorMessage';
import SweetAlert from '../SweetAlert';
import { useAuthUpdateFormik } from '../Validation/useUpdateAuthFormik';

const UpdateUser: React.FC = () => {
    
    const navigate = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleResponseUser = () => {
        setError('')
        SweetAlert({
            title: 'Berhasil perbarui data!',
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

    const updateaccountFormik = useAuthUpdateFormik({
        onError: handleErrorMessage,
        onResponse: handleResponseUser
    })

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                Perbarui Data Pengguna
            </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
            {
                error !== '' ? (
                    <ErrorMessage error={error} />
                ):
                    null
            }
            <form onSubmit={updateaccountFormik.handleSubmit}>
                <div className='mb-5'>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nama Pengguna
                    </label>
                    <input
                        type="text"
                        name='username'
                        value={updateaccountFormik.values.username}
                        onChange={updateaccountFormik.handleChange}
                        onBlur={updateaccountFormik.handleBlur}
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
                        value={updateaccountFormik.values.email}
                        onChange={updateaccountFormik.handleChange}
                        onBlur={updateaccountFormik.handleBlur}
                        placeholder="user@example.com"
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
                        updateaccountFormik.values.email !== '' && updateaccountFormik.values.username !== '' && updateaccountFormik.values.password !== '' ? (
                            <button type={loading  ? 'button' : 'submit'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md ${loading ? 'text-slate-500 bg-slate-200 cursor-not-allowed' : 'text-white bg-blue-400 cursor-pointer active:scale-[0.98] hover:brightness-[90%]'} mt-6`}>
                                {
                                    loading ? (
                                        <FaSpinner className='mr-2 duration-200 animate-spin' />
                                    ):
                                        null
                                }
                                <p>Perbarui Sekarang</p>
                            </button>
                        ) :                 
                            <button type={'button'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md 'text-slate-500 bg-slate-200 cursor-not-allowed mt-6`}>
                                <p>Perbarui Sekarang</p>
                            </button>
                    }
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateUser;
