import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] bg-blue-600 text-white px-12 flex items-center'>
        <div className='w-[20%] text-blue-600 rounded-lg flex items-center h-full'>
            <h2 className='font-[500] text-[22px] text-white'>EcoNusantara 🍃</h2>
        </div>
        <div className='w-[80%] flex items-center justify-end'>
            <ul className='w-max text-[17px] flex items-center'>
                <li className='ml-12'>Beranda</li>
                <li className='ml-12'>Wisata Alam</li>
                <li className='ml-12'>Rempah-rempah</li>
                <li className='ml-12'>Kuliner</li>
                <li className='ml-12'>Geospasial Wisata Nusantara</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
