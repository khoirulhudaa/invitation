import React, { useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Articles from '../Components/articles'
import Footer from '../Components/footer'
import LinesHero from '../Components/lineHero'
import '../article.css'

const DetailMainArtikel = () => {

  const detail = useSelector((state) => state.Information.detailArticle)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-screen h-max'>

      <div className='w-screen h-max'>
        <div className='absolute text-white z-[22223] w-full flex items-center justify-between py-7 px-12'>
          <Link to={'/'}>
            <h2 className='text-[30px] font-bold'>ecoNusantara 🍃</h2>
          </Link>
          <div className='w-max flex items-center'>
            <ul className='flex items-center text-white'>
               <Link to={'/'}>
                <li className='ml-10 cursor-pointer hover:brightness-[90%]'>Beranda</li>
               </Link>
               <a href="#informasi">
                <li className='ml-10 cursor-pointer hover:brightness-[90%]'>Informasi</li>
               </a>
               <a href='#daftar'>
                <li className='ml-10 cursor-pointer hover:brightness-[90%]'>Daftar Wisata</li>
               </a>
            </ul>
          </div>
        </div>
        <div className='relative w-full h-[60vh] overflow-hidden bg-blue-600 flex items-center justify-center'>
          <LinesHero />
          <h1 className='text-[40px] text-white font-[500] text-center flex items-center justify-center'>{detail?.name_article}</h1>
        </div>

        <div id='informasi' className='w-full px-12 py-12 pb-0'>
          <div className='w-full flex text-[20px] items-center'>
            <Link to={'/'}>
              <small className='text-blue-700 cursor-pointer underlined'>Beranda</small>
            </Link>
            <FaChevronRight className='mx-4 text-[12px] text-slate-500' />
            <small className='w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap'>{detail?.name_article}</small>
          </div>

          <div className='leading-loose text-slate-600 mt-12 w-full'>
            <div className='custom-content' dangerouslySetInnerHTML={{ __html: detail?.content }} />
          </div>
        </div>


        <hr className='w-[92%] mx-auto my-12 border border-slate-300' />

        <Articles />

      </div>

      <Footer />

    </div>
  )
}

export default DetailMainArtikel
