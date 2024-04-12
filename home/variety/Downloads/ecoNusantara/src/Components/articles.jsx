import React, { useEffect, useState } from 'react'
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Kalimantan } from '../Assets'
import API from '../Services/service'
import { getDetailArticle } from '../Store/informationSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const Articles = () => {

  const [articles, setArticles] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    (async () => {
        const response = await API.getAllArticle()
        setArticles(response?.data?.data)
        console.log(response?.data?.data)
    })()
  }, [])

  const handleClick = (data) => {
    dispatch(getDetailArticle(data))
    navigate(`/detail-main-article/${data?.name_article}}`)
  }

  return (
    <div className={`relative w-screen h-max ${location.pathname.includes('/detail-main-article') ? 'px-12 pb-12 pt-0' : 'p-12'}`}>
        <img src={Kalimantan} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
        {
            location.pathname.includes('/detail-main-article') ? (
                null
            ):
            <>
                <div className='rounded-full text-white mb-4 bg-blue-400 w-max py-3 px-6'>Informasi Menarik Untuk Kamu</div>
                <h2 className='font-bold flex items-center text-[36px]'>🏔️ <span className='relative top-1 ml-3'>Artikel Seputar Nusantara</span></h2>
            </>
        }
        <div className='w-full flex z-[33] flex-col justify-between items-center mt-8'>
            {
                articles && articles?.length > 0 ? (
                    articles?.map((data, index) => (
                        <div key={index} className='w-full min-h-[180px] my-3 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg p-5'>
                            <div className='w-full h-[50%] flex items-center justify-between overflow-hidden text-left rounded-[8px]'>
                                <h3 onClick={() => handleClick(data)} className='text-[20px] cursor-pointer hover:text-blue-600 active:scale-[0.99] underline font-[500]'>
                                    {data?.name_article}
                                </h3>
                                <div className='rounded-[10px] text-[12px] w-max h-max px-4 py-2 hidden md:flex items-center justify-center bg-green-600 text-white mr-4'>
                                    <p>Public</p>
                                </div>
                            </div>
                            <div className='w-full flex flex-wrap mt-3 items-center'>
                                <div className='rounded-full md:mb-0 mb-3 w-max h-max px-4 py-2 flex items-center justify-center bg-slate-200 text-slate-500 mr-3'>
                                    <FaCalendarAlt className='mr-2' />  {data?.year}
                                </div>
                                <div className='rounded-full md:mb-0 mb-3 max-w-[56%] h-max px-4 py-2 flex items-center justify-center bg-blue-200 text-blue-600 mr-4'>
                                    <FaBuilding className='mr-2' /> 
                                    <p className='max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                        EcoNusantara Team
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-4' />
                            <p className='text-slate-500 mt-4'>
                                {data?.description}
                            </p>
                            <div className="w-full flex items-center">
                                <div className='rounded-full w-max h-max px-4 py-2 flex items-center justify-center mt-5 bg-yellow-200 text-yellow-600 text-[12px]'>
                                    <p>
                                        Info Nusantara
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ):
                    null
            }
        </div>
    </div>
  )
}

export default Articles
