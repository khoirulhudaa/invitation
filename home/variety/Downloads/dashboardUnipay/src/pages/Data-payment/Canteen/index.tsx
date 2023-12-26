import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SweetAlert from '../../../components/alertBox';
import Table from '../../../components/table';
import { isEqual } from '../../../helpers/equal';
import API from '../../../services/api';
import { useParams } from 'react-router-dom';

const Canteen = () => {

    const [search, setSearch] = useState<string>("")
    const [alertMessage, setAlertMessage] = useState<boolean>(false)
    const [updateStatus, setUpdateStatus] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const [dataHistory, setDataHistory] = useState<[]>([])

    const dispatch = useDispatch()
    const params = useParams()
    const { prodi } = params

    useEffect(() => {
        const getDataShop = async () => {
            try {
                const response = await API.getAllHistoryPayments()
                console.log(response)
                if(!isEqual(dataHistory, response.data.data)) {
                    setDataHistory(response.data.data)
                    setUpdateStatus(false)
                    setAlertMessage(false)
                    setUpdate(false)
                }   
            } catch (error: any) {
                console.log(error.message);
            }
        };
        
        getDataShop();
    }, [dispatch, update, updateStatus]);

    const columns = [
        {label: 'NIM'},
        {label: 'Nama'},
        {label: 'Waktu'},
        {label: 'Tahun'},
        {label: 'Jumlah'},
    ]

    return (
        <>
            <div className="panel">
                <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Data Kantin (IKMI)</h5>
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="datatables">
                    <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                    <Table columns={columns} data={dataHistory} update={(e: boolean) => setUpdate(e)} />
                    </div>
                </div>
                </div>
            </div>
            {
                alertMessage && (
                    SweetAlert({
                        text:'Berhasil daftar',
                        title: 'Success',
                        confirmButtonText: 'Lanjut',
                        showCancelButton: false,
                        icon: 'success',
                    })
                )
            }
        </>
    );
};

export default Canteen;
