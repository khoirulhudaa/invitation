import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Jawa, Kalimantan, Papua, Sumatera } from '../Assets'
import Footer from '../Components/footer'
import Wisata from '../Data/wisata.json'
import Kuliner from '../Data/kuliner'
import Rempah from '../Data/rempah'
import Images from '../Data/images'
import { getInformation } from '../Store/informationSlice'
import LinesHero2 from '../Components/lineHero2'
import '../article.css'
import LinesHeroBlue from '../Components/LinesHeroBlue'

const DetailCard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const detail = useSelector((state) => state.Information.information)

  const [selectTab, setSelectTab] = useState('Deskripsi')
  const [status, setStatus] = useState(false)
  const [images, setImages] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    setStatus(false)
  }, [detail, status])

  const handleClick = (data) => {
    setStatus(true)
    dispatch(getInformation(data))
    navigate(`/detail-card/${data?.nama}`)
  }

  const TableDetail = ({header, body}) => {
    console.log('header', header)
    console.log('body', body)
    return (
        <table>
            <thead>
                <tr>
                    {
                        header?.map((data, index) => (
                            <th key={index}>{data}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    body?.map((data, index) => (
                        <tr key={index}>
                            <td>{data?.name}</td>
                            <td>{data?.value}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

const selectedImages = Images[0][detail?.nama].map((image, index) => {
    return (
        <div key={index} className={`w-[110px] h-[100px] mx-4 cursor-pointe overflow-hidden rounded-[12px] border-white border-[2px] border-dashed ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'border-slate-700' : 'border-white'}`}>
            <img src={image} alt="our-photo" className='hover:scale-[1.2] duration-300 w-full h-full' />
        </div>
    );
});

  return (
    <div className='w-screen h-max overflow-x-hidden'>

        <div className={`relative z-[4444444] w-screen ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'bg-white h-[100vh]' : 'bg-blue-600 h-[100vh]' } overflow-hidden flex justify-center`}>
            <div className={`absolute ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'text-slate-800' : 'text-white' } z-[22223] w-full flex items-center justify-between py-7 pr-12`}>
            <Link to={'/'}>
                <div className='w-max h-[44px] rounded-tr-full rounded-br-full pl-12 pr-4 bg-white'>
                    <h2 className={`text-[28px] font-bold ${detail?.type === 'Wisata' ? 'text-blue-600' : 'text-black'}`}>ecoNusantara 🍃</h2>
                </div>
            </Link>
            <div className='w-max flex items-center'>
                <ul className={`flex items-center ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'text-white' : 'text-slate-800' }`}>
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
            <div className={`relative overflow-hidden w-[50%] h-full ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'bg-white text-slate-800' : 'bg-blue-600 text-white'} border-b-[2px] border-dashed border-b-slate-800 flex flex-col justify-center`}>
                {
                    detail?.type !== 'Wisata' ? (
                        <LinesHeroBlue />
                    ):
                        <LinesHero2 />
                }
                <div className='relative w-[80%] p-12 mt-[0px] h-full flex flex-col justify-center text-left'>
                    <h1 className={`relative w-full font-bold ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'before:bg-slate-800 text-blue-600 text-[6em]' : 'before:bg-white text-[6em]'} before:h-[2px] w-full`}>{detail?.nama}.</h1>
                    <h1 className={`relative w-full font-bold text-[6em] before:absolute before:left-0 before:bottom-[0px] before:w-[60%] ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'before:bg-slate-800' : 'before:bg-white'} before:h-[2px] w-full`}>{detail?.type === 'Kuliner' ? 'Kuliner' : detail?.type === 'Rempah' ? 'Rempah Nunsatara' : 'Wisata'}</h1>
                </div>
            </div>
            <div className={`relative w-[50%] h-full overflow-hidden border-b-[2px] ${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'border-dashed border-b-slate-800' : 'border-dashed border-b-blue-500'} bg-white flex items-center justify-center`}>
                {
                    detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? (
                        <div className='absolute left-0 top-0 z-[2222] w-screen h-full bg-black bg-opacity-[0.3]'></div>
                    ):  null
                }
                 <div className='absolute z-[22222222] w-full flex px-12 justify-around items-center'>
                    {selectedImages}
                </div>
                <img src={detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? detail?.gambar : (detail?.pulau === 'Jawa' ? Jawa : detail?.pulau === 'Kalimantan' ? Kalimantan : detail?.pulau === 'Sumatera' ? Sumatera : Papua)} alt="img-detail" className={`${detail?.type === 'Kuliner' || detail?.type === 'Rempah' ? 'h-full w-full' : `h-auto w-full ${detail?.pulau === 'Jawa' ? 'scale-[2]' : 'scale-[1]'}`}`} />
            </div>
        </div>

        <div className='w-screen h-max px-12 pt-12'>
            {
                detail?.type === 'Kuliner' ? (
                    <div className='mb-12 flex items-center justify-between'>
                        <div onClick={() => setSelectTab('Deskripsi')} className={`w-[49.7%] h-[60px] rounded-tl-full rounded-bl-full text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Deskripsi' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                            Deskripsi
                        </div>
                        <div onClick={() => setSelectTab('Resep')} className={`w-[49.7%] h-[60px] text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Resep' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                            Resep {detail?.nama}
                        </div>
                    </div>
                ): detail?.type === 'Rempah' ? (
                    <div className='mb-12 flex items-center justify-between'>
                        <div onClick={() => setSelectTab('Deskripsi')} className={`w-[49.7%] h-[60px] rounded-tl-full rounded-bl-full text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Deskripsi' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                            Deskripsi
                        </div>
                        <div onClick={() => setSelectTab('Sejarah')} className={`w-[49.7%] h-[60px] text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Sejarah' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                            Cara Menanam {detail?.nama}
                        </div>
                    </div>
                ):
                    <div className='mb-12 flex items-center justify-between'>
                    <div onClick={() => setSelectTab('Deskripsi')} className={`w-[33%] h-[60px] rounded-tl-full rounded-bl-full text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Deskripsi' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                        Deskripsi
                    </div>
                    <div onClick={() => setSelectTab('Sejarah')} className={`w-[33%] h-[60px] text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Sejarah' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                        Sejarah
                    </div>
                    <div onClick={() => setSelectTab('Biaya')} className={`w-[33%] h-[60px] rounded-tr-full rounded-br-full text-center flex items-center justify-center cursor-pointer hover:brightness-[90%] ${selectTab === 'Biaya' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-200'}`}>
                        Biaya Akomodasi
                    </div>
                </div>
            }
            <div className='w-ful h-max py-2'>
                {
                    detail?.type === 'Kuliner' ? (
                    <   div className='custom-content' dangerouslySetInnerHTML={{ __html: selectTab === 'Resep' ? detail?.recept : selectTab === 'Deskripsi' ? detail?.description : detail?.description }} />
                    ): detail?.type === 'Rempah' ? (
                        <div className='custom-content' dangerouslySetInnerHTML={{ __html: selectTab === 'Deskripsi' ? detail?.description : detail?.build }} />
                    ):
                        <div className='custom-content' dangerouslySetInnerHTML={{ __html: selectTab === 'Sejarah' ? detail?.history : selectTab === 'Biaya' ? <TableDetail header={detail?.header} body={detail?.body} /> : detail?.description }} />
                }
            </div>
        </div>

        <div className='relative w-screen h-max pl-12 pb-12 mt-16'>
            <img src={detail?.pulau === 'Jawa' ? Jawa : detail?.pulau === 'Kalimantan' ? Kalimantan : detail?.pulau === 'Sumatera' ? Sumatera : Papua} className='absolute scale-[1.6] top-[-100px] right-0 opacity-[0.2] z-[-1]' alt='Jawa' />
            <div className='rounded-full text-white mb-4 bg-blue-400 w-max py-3 px-6'>Nusa1 - Wisata Populer Nusantara</div>
            <h2 className='font-bold flex items-center text-[36px]'>🏔️ <span className='relative top-1 ml-3'>Rekomendasi 7 Wisata Nusantara</span></h2>
            <div className='w-full pr-6 pb-5 overflow-x-auto items-center'>
                <div className='w-max flex justify-between items-center mt-12'>
                    {
                        (detail?.type === 'Wisata' ? Wisata : detail?.type === 'Rempah' ? Rempah : Kuliner)?.map((data, index) => (
                            <div key={index} className='w-[340px] h-[440px] mr-6 bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[20px]'>
                                <div className='relative w-full overflow-hidden h-[50%]'>
                                    <div className='absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center'>
                                        <p>Liburan</p> 
                                    </div>
                                    <img src={data?.gambar} alt="Wisata" loading='lazy' className='hover:scale-[1.2] duration-[1s] h-full w-full' />
                                </div>
                                <div className='w-full flex flex-col items-end justify-between h-[50%] pt-2'>
                                    <div className='w-full h-[100%] p-4'>
                                        <h2 className='font-bold text-[22px] mb-2'>{data?.nama}</h2>
                                        <p className='leading-loose text-slate-500 text-[14px]'>{data?.lokasi}</p>
                                    </div>
                                    <div onClick={() => {handleClick(data)}} className='w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-200'>
                                        Lihat Artikel
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>

        <Footer />
      
    </div>
  )
}

export default DetailCard
