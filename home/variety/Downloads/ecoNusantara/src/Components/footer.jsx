import React from 'react'
import { Papua } from '../Assets'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden w-screen px-16 py-20 flex items-center justify-between mt-16 bg-blue-800 text-white rounded-tl-[140px]'>
        <img src={Papua} alt="Papua" className='absolute right-0 scale-[1.4] bottom-0 opacity-[0.6]' />
        <div className='w-[30%] h-full'>
            <h2 className='font-bold text-[28px] my-6'>ecoNusantara 🍃</h2>
            <p className='font-normal text-slate-200 leading-loose text-[14px]'>Website informasi Nusantara seputar wisata, rempah dan kulinar nya yang beraneka ragam.</p>
        </div>
        <div className='w-[70%] h-full justify-end flex items-center'>
          <div className='w-[40%] h-full'>
            <ul>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Beranda</li>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Wisata Nusantara</li>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Aneka Rempah</li>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%]'>Kuliner Nusantara</li>
            </ul>
          </div>
          <div className='w-[40%] h-full'>
            <ul>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Artikel Nusantara</li>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Jenis Kekayaan Alam</li>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Kontak Pemandu Wisata</li>
              <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%]'>Peta Digital</li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer
