import React from "react";
import { FaTrash } from "react-icons/fa";
import toRupiah from "../helpers/toRupiah";
import API from "../services/api";
import SweetAlert from "./alertBox";
import showFormattedDate from "../helpers/formatDate";

interface Column {
  label?: string,
  amount?: number,
  channel_code?: string,
  account_number?: string,
  date?: any,
}

interface TableWDAdminProps {
  data?: Column[],
  columns?: Column[],
  update?: any, // Include the update property
}

const Table: React.FC<TableWDAdminProps> = ({ data, columns, update }) => {
  
const handleRemoveUser = async (NIM: string) => {
    const responseRemove = await API.removeUser(NIM)
    if(responseRemove.data.status === 200) {
        (() => {
            update(true)
        })()
        SweetAlert({
            title: 'Success',
            confirmButtonText: 'Lanjut',
            showCancelButton: false,
            icon: 'success',
            text: 'Berhasil hapus pengguna',
        })
    } else {
        SweetAlert({
            title: 'Error',
            cancelButtonText: 'Tutup',
            showCancelButton: true,
            showConfirmButton: false,
            icon: 'error',
            text: 'Gagal hapus pengguna!',
        })
    }
}
    
return (
    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
      <thead className="align-bottom">
      <tr>
        {
        columns?.map((column: Column, index: number) => (
            <th
              key={index}
              className="py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
            >
              {column.label}
            </th>
        ))
        }
      </tr>
      </thead>
      <tbody>
        {
            data?.map((data: any, index: number) => (
                <tr key={index}>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">{data?.NIM}</h6>
                          </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">{data?.fullName}</h6>
                          </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{showFormattedDate(data?.date)}</p>
                    </td>
                    <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">{data?.year}</span>
                    </td>
                    <td className="p-2 text-center text-red-500 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">{toRupiah(data?.amount)}</span>
                    </td>
                </tr>
            ))
        }
      </tbody>
  </table>
  )
}

export default Table;
