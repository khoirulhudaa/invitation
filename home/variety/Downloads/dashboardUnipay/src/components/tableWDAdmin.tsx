import React from "react";
import showFormattedDate from "../helpers/formatDate";

interface Column {
  label?: string,
  amount?: number,
  channel_code?: string,
  account_number?: string,
  date?: any,
}

interface TableWDAdminProps {
  data?: Column[];
  columns?: Column[];
}

const TableWDAdmin: React.FC<TableWDAdminProps> = ({ data, columns }) => {
  return (
    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
      <thead className="align-bottom">
      <tr>
        {(columns ?? []).map((column: Column, index: number) => (
            <th
              key={index}
              className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
            >
              {column.label}
            </th>
        ))}
      </tr>
      </thead>
      <tbody className={`relative ${data && data.length > 0 ? '' : 'h-[150px]'}`}>
        {
            data && data.length > 0 ? (
                data?.map((data: any, index: number) => (
                  <tr key={index}>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">{data?.amount}</h6>
                            </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">{data?.channel_code}</h6>
                            </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{data?.account_number}</p>
                      </td>
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">{showFormattedDate(data?.date)}</span>
                      </td>
                  </tr>
              ))
            ):
              <div className="w-full flex flex-col top-3 justify-center absolute left-[50%] transform translate-x-[-50%] h-full text-center items-center">
                <img src="/assets/images/search.png" alt="icon" className="w-[80px]" />
                <p className="text-[15px] mt-4">Belum ada pencairan!</p>
              </div>
        }
      </tbody>
  </table>
  )
}

export default TableWDAdmin;
