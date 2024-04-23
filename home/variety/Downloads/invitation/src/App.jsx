import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import { FaBuilding, FaCommentAlt, FaHandHoldingHeart, FaHeart, FaHome, FaMapMarked } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './App.css';
import { WayangAtas, WayangBawah } from './assets';
import Particle from './components/particle';

const App = () => {

  const [active, setActive] = useState('home')

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');

  useState(() => {
    AOS.init();
  }, [active])

  return (
    <section className='relative overflow-hidden border border-slate-600 rounded-[20px] mx-auto bg-black w-[100vw] lg:w-[32vw] h-screen overflow-y-auto'>
      {
        active === 'home' ? (
            <div className='relative w-full h-[90vh]'>
              <div className='lg:scale-[1] scale-[0.9]'>
                <div className='w-full h-max pt-14 lg:pt-20 flex flex-col items-center justify-center text-center'>
                  <img src={WayangAtas} alt="Wayang" className='w-[35%] mb-3' />
                  <h2 className='text-[#d5ab67] text-[32px] flex-wrap text-[#d5ab67]'>Salman & Nurul</h2>
                  <img src={WayangBawah} alt="Wayang" className='w-[35%] mt-3' />
                </div>
                <div className='w-full h-max mt-10 flex flex-col items-center justify-center text-white text-center'>
                  <p className='text-[12px]'>
                      Kepada Yth.
                      <br />
                      Bapak/Ibu/Saudara/i
                  </p>
                  <p className='mt-3 font-bold text-[#d5ab67]'>{name ?? 'Fulan'}</p>
                </div>
              </div>
             <Particle />
            </div>
        ): active === 'quotes' ? (
            <div className='relative w-full h-[90vh] text-[white] flex items-center flex-col justify-center text-center'>
              <div className='lg:scale-[1] scale-[0.9]'>
                <p className='w-[80%] mx-auto text-[14px] leading-loose'>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."</p>
                <p className='mt-3'>(QS.Ar-Ruum: 30:21)</p>
              </div>
             <Particle />
            </div>
        ): active === 'mempelai' ? (
            <div className='relative w-full h-[90vh] text-[white] flex items-center flex-col justify-center text-center'>
             <div className='lg:scale-[1] scale-[0.8]'>
                <p>Bismillahirahmanirahim</p>
                <p className='text-[#d5ab67] my-4'>Assalamu'alaikum warahmatullahi wabarakatuh</p>
                <p className='text-[14px] w-[90%] mx-auto leading-loose'>Maha Suci Allah SWT Yang telah meciptakan makhluk-nya berpasang berpasang-pasangan. Ya Allah dengan kerendahan hati. Perkenalkanlah kami menikahkan putra-putri kami tercinta.</p>
        
                <div className='mb-4 mx-auto mt-8 text-center flex flex-col items-center justify-center'>
                  <h2 className='text-[24px]'>Gilang Ramadhan, S.Kom., B.Cs.</h2>
                  <p className='text-[14px]'>Putra ke dua Bpk. Muhaemin & Ibu Orinah</p>
                  <div className='bg-[#d5ab67] text-white rounded-full px-2 py-1 flex items-center justify-center mt-4 active:scale-[0.96] hover:brightness-[90%] cursor-pointer'>
                    <p>#instagram</p>
                  </div>
                </div>
                <div className='mb-4 mx-auto mt-8 text-center flex flex-col items-center justify-center'>
                  <h2 className='text-[24px]'>Dyah Ayu Wulandari, S.M.</h2>
                  <p className='text-[14px]'>Putri bungsu Bpk. Suratmin & Ibu Ngatini</p>
                  <div className='bg-[#d5ab67] text-white rounded-full px-2 py-1 flex items-center justify-center mt-4 active:scale-[0.96] hover:brightness-[90%] cursor-pointer'>
                    <p>#instagram</p>
                  </div>
                </div>
             </div>
             <Particle />
            </div>
        ): active === 'acara' ? (
            <div className='relative w-full h-[90vh] text-[white] flex items-center flex-col justify-center text-center'>
              <div className='lg:scale-[1] scale-[0.8]'> 
                <p className='text-[#d5ab67]'>Akad Nikah</p>
                <p className='text-[#d5ab67] my-1'>Rabu, 8 Mei 2024</p>
                <p className='text-[14px] w-[90%] mx-auto leading-loose'>Pukul: 07.30 WIB - Selesai</p>
                
                <p className='text-[#d5ab67] mt-4'>Rumah Mempelai Wanita</p>
                <p className='text-[14px] w-[85%] mx-auto leading-loose'>Ds. Gembol RT 01 RW 10 Karanganyar, Ngawi Jawa Timur</p>
        
                <p className='text-[#d5ab67] mt-4'>Undangan</p>
                <div className='w-[70%] my-4 flex items-center justify-center mx-auto'>
                  <p className='w-[30%]'>Rabu</p>
                  <h2 className='text-[32px] w-[30%] border-x-[2px] border-x-[#d5ab67] px-2 mx-4'>8</h2>
                  <p className='w-[30%]'>MEI 2024</p>
                </div>
                <p className='text-[14px] w-[90%] mx-auto leading-loose'>Pukul: 07.30 WIB - Selesai</p>
                
                <p className='text-[#d5ab67] mt-4'>Rumah Mempelai Wanita</p>
                <p className='text-[16px] w-[85%] mx-auto leading-loose'>Ds. Gembol RT 01 RW 10 Karanganyar, Ngawi Jawa Timur</p>
                
                <div className='w-[75%] mx-auto flex items-center justify-center mt-4'>
                  <div className='flex-col w-[20%] h-max mx-2 px-2 py-1 rounded-[10px] flex items-center justify-center bg-[#d5ab67] text-black text-center'>
                    <h2 className='text-[24px]'>00</h2>
                    <p>Hari</p>
                  </div>
                  <div className='flex-col w-[20%] h-max mx-2 px-2 py-1 rounded-[10px] flex items-center justify-center bg-[#d5ab67] text-black text-center'>
                    <h2 className='text-[24px]'>00</h2>
                    <p>Jam</p>
                  </div>
                  <div className='flex-col w-[20%] h-max mx-2 px-2 py-1 rounded-[10px] flex items-center justify-center bg-[#d5ab67] text-black text-center'>
                    <h2 className='text-[24px]'>00</h2>
                    <p>Menit</p>
                  </div>
                  <div className='flex-col w-[20%] h-max mx-2 px-2 py-1 rounded-[10px] flex items-center justify-center bg-[#d5ab67] text-black text-center'>
                    <h2 className='text-[24px]'>00</h2>
                    <p>Detik</p>
                  </div>
                </div>
              </div>
             <Particle />
            </div>
        ): active === 'map' ? (
            <div className='relative w-full h-[90vh] text-[white] flex items-center flex-col justify-center text-center'>
              <div className='lg:scale-[1] scale-[0.9] w-[100%]'>
                <div className='relative w-[80%] h-[50vh] mx-auto overflow-hidden rounded-[12px]'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.032252012774!2d111.280064!3d-7.350275000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79fb0d3bb6e7a9%3A0xe62dea37a215d498!2sRumah%20Suratmin!5e0!3m2!1sid!2sid!4v1713839057300!5m2!1sid!2sid" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p className='text-[#d5ab67] mt-4'>Rumah Suratmin</p>
                <p className='text-[14px] w-[85%] mx-auto leading-loose'>Sentul, Gembol, Kec. Karanganyar, Kabupaten Ngawi, Jawa Timur 63257</p>
              </div>
             <Particle />
            </div>
        ): active === 'gift' ? (
            <div className='relative w-full h-[90vh] text-[white] flex items-center flex-col justify-center text-center'>
              <div className='lg:scale-[1] scale-[0.9] w-full mx-auto flex flex-col justify-center items-center'>

                <h2 className='text-[30px] text-[#d5ab67]'>Tanda Kasih</h2>

                <div className='w-[80%] justify-center h-max my-3 flex items-center flex-col'>
                  <div className='w-full flex items-center justify-center'>
                    <p className='mr-4'>BCA</p>
                    <p className='rounded-full bg-white text-black p-2 my-2 flex items-center justify-center'>
                      7151689381
                    </p>
                  </div>
                  <p>a.n: Gilang Ramadhan</p>
                </div>
                <div className='w-[80%] justify-center h-max my-3 flex items-center flex-col'>
                  <div className='w-full flex items-center justify-center'>
                    <p className='mr-4'>BCA</p>
                    <p className='rounded-full bg-white text-black p-2 my-2 flex items-center justify-center'>
                      2060686061
                    </p>
                  </div>
                  <p>a.n: Dyah Ayu Wulandari</p>
                </div>
                <div className='w-[80%] h-max my-3 flex items-center flex-col'>
                  <div className='w-full flex items-center justify-center'>
                    <p className='mr-4'>BRI</p>
                    <p className='rounded-full bg-white text-black p-2 my-2 flex items-center justify-center'>
                      3253 0102 5203 536
                    </p>
                  </div>
                  <p>a.n: Gilang Ramadhan</p>
                </div>
                <div className='w-[80%] h-max my-3 flex items-center flex-col'>
                  <div className='w-full flex items-center justify-center'>
                    <p className='mr-4'>BRI</p>
                    <p className='rounded-full bg-white text-black p-2 my-2 flex items-center justify-center'>
                      3759 0103 7604 536
                    </p>
                  </div>
                  <p>a.n: Dyah Ayu Wulandari</p>
                </div>
              </div>

             <Particle />
            </div>
        ): (
            <div className='relative w-full h-[90vh] text-[white] flex items-center flex-col justify-center text-center'>
              <div className='lg:scale-[1] scale-[0.9] w-full mx-auto flex flex-col justify-center items-center'>
                <p className='text-white w-[80%]'>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/ Saudara/i berkenan hadir untuk memberikan do'a restu</p>
                <p className='text-[#d5ab67] mb-1 mt-4 w-[80%]'>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>

                <p className='text-white w-[80%] mt-6 mb-8'>Kami yang berbahagia</p>
                
                <div className='w-[90%] flex justify-center items-center'>
                  <div className='w-1/2 h-max flex flex-col items-center justify-center px-4'>
                    <small className='text-white'>Kel Bpk.Suratmin</small>
                    <small className='text-white'>Ibu. Ngatini</small>
                  </div>
                  <div className='w-1/2 h-max flex flex-col items-center justify-center px-4'>
                    <small className='text-white'>Kel Bpk.Muhaemin</small>
                    <small className='text-white'>Ibu. Orinah</small>
                  </div>
                </div>
              </div>
             <Particle />
            </div>  
        )
      }

      <div className='relative w-full h-[10vh] flex items-center bottom-0 left-0 z-[333] shadow-lg bg-[#181818]'>
        {
          active === 'map' || active === 'gift' || active === 'thank' ? (
            <>
              <div onClick={() => setActive('mempelai')} className={`${active === 'mempelai' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaHeart className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Mempelai</small>
              </div>
              <div onClick={() => setActive('acara')} className={`${active === 'acara' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaBuilding className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Acara</small>
              </div>
              <div onClick={() => setActive('map')} className={`${active === 'map' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaMapMarked className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Map</small>
              </div>
              <div onClick={() => setActive('gift')} className={`${active === 'gift' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaHandHoldingHeart className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Gift</small>
              </div>
              <div onClick={() => setActive('thank')} className={`${active === 'thank' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaHandHoldingHeart className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Thank</small>
              </div> 
            </>
          ):
            <>
              <div onClick={() => setActive('home')} className={`${active === 'home' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaHome className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Opening</small>
              </div>
              <div onClick={() => setActive('quotes')} className={`${active === 'quotes' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaCommentAlt className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Quotes</small>
              </div>
              <div onClick={() => setActive('mempelai')} className={`${active === 'mempelai' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaHeart className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Mempelai</small>
              </div>
              <div onClick={() => setActive('acara')} className={`${active === 'acara' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaBuilding className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Acara</small>
              </div>
              <div onClick={() => setActive('map')} className={`${active === 'map' ? 'bg-[#7a8303]'  : 'bg-transparent'} w-[20%] h-full flex flex-col text-center items-center justify-center p-2 cursor-pointer active:scale-[0.96] duration-100`}>
                <FaMapMarked className='text-[#d5ab67]' />
                <small className='mt-2 text-white'>Map</small>
              </div>
            </>
        }
      </div>
    </section>
  )
}

export default App
