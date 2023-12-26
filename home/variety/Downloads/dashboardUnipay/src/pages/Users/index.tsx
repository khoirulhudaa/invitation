import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SweetAlert from '../../components/alertBox';
import TableUsers from '../../components/tableUser';
import { isEqual } from '../../helpers/equal';
import API from '../../services/api';

const Users = () => {

    const [search, setSearch] = useState<string>("")
    const [titleModal, setTitleModal] = useState<string>("")
    const [alertMessage, setAlertMessage] = useState<boolean>(false)
    const [updateStatus, setUpdateStatus] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const [dataUsers, setDataUsers] = useState<[]>([])

    const dispatch = useDispatch()

    useEffect(() => {
        const getDataShop = async () => {
            try {
                const response = await API.getAllUser()

                if(!isEqual(dataUsers, response.data.data)) {
                    setDataUsers(response.data.data)
                    setUpdateStatus(false)
                    setAlertMessage(false)
                    setUpdate(false)
                }   
            } catch (error: any) {
                console.log(error.message);
            }
        };
        
        getDataShop();
    }, [dispatch, update]);

    const columns = [
        {label: 'Nama'},
        {label: 'Jurusan'},
        {label: 'Tahun'},
        {label: 'Saldo'},
        {label: 'Opsi'},
    ]

    return (
        <>
            <div className="panel">
                <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Data Pengguna Unipay</h5>
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="datatables">
                    <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                    <TableUsers columns={columns} data={dataUsers} update={(e: boolean) => setUpdate(e)} />
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

export default Users;
