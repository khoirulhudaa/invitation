import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/animate.css';
import SweetAlert from '../components/alertBox';
import AlertPayment from '../components/alertPayment';
import Button from '../components/button';
import TableWDAdmin from '../components/tableWDAdmin';
import toRupiah from '../helpers/toRupiah';
import API from '../services/api';
import { getBalance } from '../store/paymentSlice';
import { FaSpinner } from 'react-icons/fa';

const Finance = () => {
    const [dataUsers, setDataUsers] = useState<any[]>([])
    const [historyWD, setHistoryWD] = useState<any[]>([])
    const [statusWithdraw, setStatusWithdraw] = useState<boolean>(false)
    const [revenueAdmin, setRevenueAdmin] = useState<number>(0)
    const [revenueCanteen, setRevenueCanteen] = useState<number>(0)
    const [balance, setBalance] = useState<number>(0)
    const [update, setUpdate] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const dispatch = useDispatch();

    useEffect(() => {
        const resultData = async () => {
            try {
                const responseUser = await API.getAllUser()
                const responseRevenueAdmin = await API.getRevenue()
                const responseRevenueCanteen = await API.getRevenueCanteen()
                const responseBalance = await API.getBalance()
                const historyWD = await API.getHistoryWDAdmin()
                setDataUsers(responseUser.data.data)
                setRevenueAdmin(responseRevenueAdmin.data.data[0].revenueAdmin ?? 0)
                setRevenueCanteen(responseRevenueCanteen.data.data[0].revenueCanteen ?? 0)
                setBalance(responseBalance.data.data.balance)
                setHistoryWD(historyWD.data.data)
                console.log(historyWD.data.data)
                dispatch(getBalance(responseRevenueAdmin.data.data[0].revenueAdmin ?? 0))
                setUpdate(false)
            } catch (error: any) {
                console.log(error.message);
            }
        };
        
        resultData();
    }, [update, dispatch]);


    const handleResponse = (response: number) => {
        if(response === 200) {
            setStatusWithdraw(false)
            setUpdate(true)
            SweetAlert({
                icon: 'success',
                text: 'Pencairan berhasil!',
                showCancelButton: false
            })
        }
    }

    const handleErrorMessage = (error: string) => {
        setErrorMessage(error)
    }

    const columns = [
        {label: 'Jumlah'},
        {label: 'Kode bank'},
        {label: 'Nomer akun'},
        {label: 'Waktu'},
    ]
    
    return (
        <div>
            {
                statusWithdraw ? <AlertPayment handleResponse={(e: number) => handleResponse(e)} handleErrorMessage={(e: string) => handleErrorMessage(e)} error={errorMessage} balance={revenueAdmin ?? 0} onClick={() => setStatusWithdraw(false)} /> : null
            }
                
                <ul className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                <li>
                    <Button onClick={() => setUpdate(true)} text='Muat ulang' typeButton='with-icon' icon={<FaSpinner />} />
                </li>
                <div className='flex items-center'>
                    <p>SALDO : 
                        <span className='font-bold ml-2 text-[16px]'>
                            {revenueAdmin ? toRupiah(revenueAdmin) : 0}
                        </span>
                    </p>
                    <div className='w-[1px] h-[40px] bg-slate-300 mx-5'>

                    </div>
                    <small className='text-slate-500 text-[14px] mr-5'>Min. nominal Rp. 10.000</small>
                    <Button disabled={revenueAdmin > 10000 ? false : true} text='Percairan' onClick={() => setStatusWithdraw(true)} />
                </div>
            </ul>
            <hr className='my-5' />
            <div className="pt-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6 mb-6 text-white">
                    
                    <div className="panel bg-blue-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Pengguna</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {dataUsers && dataUsers.length > 0 ? dataUsers?.length : 0} Akun</div>
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            Pengguna aktif
                        </div>
                    </div>

                    <div className="panel bg-blue-300">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total saldo (Seluruh)</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">{balance ? toRupiah(balance) : 0}</div>
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            Saldo keseluruhan
                        </div>
                    </div>

                    <div className="panel bg-blue-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total saldo (Terbaru)</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">{revenueCanteen ? toRupiah(revenueCanteen) : 0}</div>
                        </div>
                        <div className="flex items-center font-semibold mt-5">
                            Saldo kantin
                        </div>
                    </div>
                </div>

                <div className='mt-[45px]'>
                    <h2 className='text-[20px] ml-[2px] mb-5'>Riwayat pencairan</h2>
                    <TableWDAdmin columns={columns} data={historyWD} />
                </div>
            </div>
        </div>
    );
};

export default Finance;
