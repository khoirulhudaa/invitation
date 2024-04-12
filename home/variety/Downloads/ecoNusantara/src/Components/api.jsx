import React, { useRef, useState } from 'react'
import { FaCopy, FaTimes } from 'react-icons/fa'
import { Kalimantan } from '../Assets'
import SweetAlert from '../Components/SweetAlert'
import copy from "copy-to-clipboard";

const Api = () => {

    const [activeAPI, setActiveAPI] = useState(false)
    const [selectAPI, setSelectAPI] = useState(false)

    const yourJsonObjectPemandu = {
        status: 200,
        message: "Berhasil ambil data",
        data: [
            {
                _id: "6617b6b92c0958941fee6dcf",
                contact_id: "aca4650aef",
                name_contact: "Refansyah",
                photo: "https://....",
                number: 897182671256512,
                created_at: "2024-04-11T10:03:23..",
                __v: 0
            },
            {
                _id: "6617b6dc2c0958941fee6dd2",
                contact_id: "8abe74aa87",
                name_contact: "Fadhiil Lincoln",
                photo: "https://....",
                number: 189217261762,
                created_at: "2024-04-11T10:03:23..",
                __v: 0
            },
            {
                _id: "6617b7152c0958941fee6dd5",
                contact_id: "0f0e1c6894",
                name_contact: "Mario Seno",
                photo: "https://....",
                number: 91287162771262,
                created_at: "2024-04-11T10:03:23..",
                __v: 0
            },
        ]
    }

    const yourJsonObjectTour = {
        status: 200,
        message: "Berhasil ambil data",
        data: [
            {
                _id: "66152830ba24afcf153231ac",
                tour_id: "41c15a8691",
                name_location: "Bukit Lawang",
                island: "Sumatera",
                lat: 3.556283105332673,
                long: 98.14426924,
                address: "Kab. Langkat/....",
                link: "https://www.google.com/...",
                thumbnail: "https://www.google...",
                created_at: "2024-04-09T11:35:29..",
                __v: 0
            },
            {
                _id: "66175cb2d03a68bbb0b5b483",
                tour_id: "4f92a0b8e6",
                name_location: "Pulau We",
                island: "Sumatera",
                lat: 5.824543195960888,
                long: 95.31913129,
                address: "Pulau Weh, Sabang/...",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T03:41:..",
                __v: 0
            },
            {
                _id: "66175cebd03a68bbb0b5b487",
                tour_id: "143e590dcb",
                name_location: "Gunung Kerinci",
                island: "Sumatera",
                lat: -1.6966585295078527,
                long: 101.2641632,
                address: "Gunung Kerinci, Jambi",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T03:41:..",
                __v: 0
            },
        ],
    }

    const yourJsonObjectRempah = {
        status: 200,
        message: "Berhasil ambil data",
        data: [
            {
                _id: "6617865d37b5701972d0bab1",
                spice_id: "5f0ff75725",
                name_spice: "Cengkeh",
                island: "Sulawesi",
                lat: 0.6709933560050877,
                long: 127.40435482468911,
                address: "pulau Ternate dan Tidore.",
                icon: "🍀",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:34:05...",
                __v: 0
            },
            {
                _id: "661786ea03e491080bf802be",
                spice_id: "d706233ad7",
                name_spice: "Pala",
                island: "Sulawesi",
                lat: -4.557411504212711,
                long: 129.92839544548977,
                address: "Pulau Banda, Maluku",
                icon: "🟤",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:31:30.788Z",
                __v: 0
            },
            {
                _id: "661787a403e491080bf802c4",
                spice_id: "3b5d5fac8c",
                name_spice: "Kapulaga",
                island: "Jawa",
                lat: -7.8878589362318134,
                long: 112.66504722859308,
                address: "Jawa TImur, Indonesia",
                icon: "🫛",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:31:30.788Z",
                __v: 0
            },
            {
                _id: "6617884d37b5701972d0bab7",
                spice_id: "285807a559",
                name_spice: "Kayu Manis",
                island: "Sumatera",
                lat: 0.30593109106850236,
                long: 101.45298202309766,
                address: "Sumatera, Indonesia",
                icon: "🪵",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:34:05...",
                __v: 0
            }
        ]
    }

    const yourJsonObjectKuliner = {
        status: 200,
        message: "Berhasil ambil data",
        data: [
            {
                _id: "661697f8c9561e0996f0c48c",
                culinary_id: "479fed6786",
                name_culinary: "Rendang",
                island: "Sumatera",
                lat: -0.41747187872437186,
                long: 100.60413985918662,
                address: "Kec. Sungayang...",
                icon: "🍲",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-10T13:44:...",
                __v: 0
            },
            {
                _id: "66178a6103e491080bf802d6",
                culinary_id: "e420a526df",
                name_culinary: "Sate Lilit",
                island: "Bali",
                lat: -8.372974247547969,
                long: 115.10200839067251,
                address: "Bali, Indonesia",
                icon: "🍢",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:31:...",
                __v: 0
            },
            {
                _id: "66178b3137b5701972d0bac9",
                culinary_id: "162b4b9ec9",
                name_culinary: "Pecel Lele",
                island: "Jawa",
                lat: -6.727094349761996,
                long: 108.50968679914126,
                address: "Cirebon, Jawa Barat, Indonesia",
                icon: "🐟",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:34:...",
                __v: 0
            },
            {
                _id: "66178bb937b5701972d0bacf",
                culinary_id: "73dbeb9f89",
                name_culinary: "Pempek",
                island: "Sumatera",
                lat: -2.961479939023328,
                long: 104.7492262976555,
                address: "Palembang, Sumatera, Indonesia",
                icon: "🥟",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:34:...",
                __v: 0
            },
            {
                _id: "66178c3d37b5701972d0bad5",
                culinary_id: "f012e756b1",
                name_culinary: "Mie Aceh",
                island: "Sumatera",
                lat: 4.2037829415966605,
                long: 97.18648785234075,
                address: "Aceh, Indonesia",
                icon: "🍜",
                link: "https://www.google.com/...",
                thumbnail: "https://...",
                created_at: "2024-04-11T06:34:...",
                __v: 0
            }
        ]
    }

    const textRefMain = useRef();
    const textRef = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();

    //Function to add text to clipboard
    const copyToClipboardMain = () => {
      // Text from the html element
      let copyText = textRefMain?.current?.value;
      // Adding text value to clipboard using copy function
      let isCopy = copy(copyText);
  
      //Dispalying notification
      if (isCopy) {
        SweetAlert({
            title: 'Berhasil di Salin!',
            confirmButtonText: 'Tutup',
            icon: 'success',
            showCancelButton: false,
        })
      }
    };

    const copyToClipboard1 = () => {
      // Text from the html element
      let copyText = textRef?.current?.value;
      // Adding text value to clipboard using copy function
      let isCopy = copy(copyText);
  
      //Dispalying notification
      if (isCopy) {
        SweetAlert({
            title: 'Berhasil di Salin!',
            confirmButtonText: 'Tutup',
            icon: 'success',
            showCancelButton: false,
        })
      }
    };

    const copyToClipboard2 = () => {
      // Text from the html element
      let copyText = textRef2?.current?.value;
      // Adding text value to clipboard using copy function
      let isCopy = copy(copyText);
  
      //Dispalying notification
      if (isCopy) {
        SweetAlert({
            title: 'Berhasil di Salin!',
            confirmButtonText: 'Tutup',
            icon: 'success',
            showCancelButton: false
        })
      }
    };

    const copyToClipboard3 = () => {
      // Text from the html element
      let copyText = textRef3?.current?.value;
      // Adding text value to clipboard using copy function
      let isCopy = copy(copyText);
  
      //Dispalying notification
      if (isCopy) {
        SweetAlert({
            title: 'Berhasil di Salin!',
            confirmButtonText: 'Tutup',
            icon: 'success',
            showCancelButton: false
        })
      }
    };


  return (
    <section id='API' className='relative overflow-hidden w-screen bg-blue-700 h-max pt-14 md:pt-20 pb-16 md:pb-28 my-12 px-4 md:px-16'>
        <input value="https://be-geospasial.vercel.app/v2/api/contact" className='absolute opacity-0' disabled type="text" ref={textRefMain} />
        <input value="https://be-geospasial.vercel.app/v2/api/tour" className='absolute opacity-0' disabled type="text" ref={textRef} />
        <input value="https://be-geospasial.vercel.app/v2/api/spice" className='absolute opacity-0' disabled type="text" ref={textRef2} />
        <input value="https://be-geospasial.vercel.app/v2/api/culinary" className='absolute opacity-0' disabled type="text" ref={textRef3} />
        
        <h2 className='text-[26px] mb-8 md:mb-0 md:text-[36px] text-white font-normal text-center'>API ecoNusantara 2024 💻</h2>
        <p className='text-slate-200 md:block hidden mt-4 mb-10 text-center'>Dapatkan Data Geospasial Kabupaten Cirebon Secara Terbukan, Gratis dan Mudah.</p>    
        <div className='relative w-full z-[444] px-4 md:px-12 pt-6 md:pt-[80px] pb-6 md:pb-20 flex mx-auto rounded-[16px] bg-white border-[2px] min-h-[680px] border-blue-500 border-dashed'>
            <div className='w-full md:w-1/2 h-[500px] flex justify-between flex-col'>
                <label htmlFor="api-dinas" className='font-[500] md:flex items-center'>
                    Data Sebaran Wisata  
                    <div className="w-max mt-3 md:mt-0 md:ml-auto flex items-center">
                        <div className='w-max bg-green-400 mr-4 px-3 py-2 w-max h-max text-[10px] rounded-md text-white'>
                            (GET)
                        </div>
                        <p onClick={() => {setSelectAPI('pemandu'), setActiveAPI(true)}} className='text-blue-600 md:hidden cursor-pointer active:scale-[0.98] hover:text-blue-800'>
                            Lihat Respon
                        </p>    
                    </div>
                    <p onClick={() => {setSelectAPI('pemandu'), setActiveAPI(true)}} className='text-blue-600 cursor-pointer md:flex hidden active:scale-[0.98] hover:text-blue-800'>
                        Lihat Respon
                    </p>
                </label>
                <div className='relative rounded-[10px] bg-blue-200 text-blue-700 w-[100%] p-4 flex items-center my-6'>
                    <code className="w-[86%] overflow-hidden overflow-ellipsis whitespace-nowrap">https://be-econusantara.vercel.app/v1/api/contact</code>
                    <div onClick={() => copyToClipboardMain()} className='absolute right-1 z-[444] scale-[0.9] z-[999] rounded-[10px] shadow-lg w-[50px] h-[50px] bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:p-2 duration-200 text-white'>
                        <FaCopy />
                    </div>
                </div>
                <label htmlFor="api-dinas" className='font-[500] md:flex items-center'>
                    Data Sebaran Wisata  
                    <div className="w-max mt-3 md:mt-0 md:ml-auto flex items-center">
                        <div className='w-max bg-green-400 mr-4 px-3 py-2 w-max h-max text-[10px] rounded-md text-white'>
                            (GET)
                        </div>
                        <p onClick={() => {setSelectAPI('wisata'), setActiveAPI(true)}} className='text-blue-600 md:hidden cursor-pointer active:scale-[0.98] hover:text-blue-800'>
                            Lihat Respon
                        </p>    
                    </div>
                    <p onClick={() => {setSelectAPI('wisata'), setActiveAPI(true)}} className='text-blue-600 cursor-pointer md:flex hidden active:scale-[0.98] hover:text-blue-800'>
                        Lihat Respon
                    </p>
                </label>
                <div className='relative rounded-[10px] bg-blue-200 text-blue-700 w-[100%] p-4 flex items-center my-6'>
                    <code className="w-[86%] overflow-hidden overflow-ellipsis whitespace-nowrap">https://be-econusantara.vercel.app/v1/api/tour</code>
                    <div onClick={() => copyToClipboard1()} className='absolute right-1 z-[444] scale-[0.9] z-[999] rounded-[10px] shadow-lg w-[50px] h-[50px] bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:p-2 duration-200 text-white'>
                        <FaCopy />
                    </div>
                </div>
                <label htmlFor="api-dinas" className='font-[500] md:flex items-center'>
                    Data Sebaran Rempah 
                    <div className="w-max mt-3 md:mt-0 md:ml-auto flex items-center">
                        <div className='w-max bg-green-400 mr-4 px-3 py-2 w-max h-max text-[10px] rounded-md text-white'>
                            (GET)
                        </div>
                        <p onClick={() => {setSelectAPI('rempah'), setActiveAPI(true)}} className='text-blue-600 md:hidden cursor-pointer active:scale-[0.98] hover:text-blue-800'>
                            Lihat Respon
                        </p>    
                    </div>
                    <p onClick={() => {setSelectAPI('rempah'), setActiveAPI(true)}} className='text-blue-600 cursor-pointer md:flex hidden active:scale-[0.98] hover:text-blue-800'>
                        Lihat Respon
                    </p>
                </label>
                <div className='relative rounded-[10px] bg-blue-200 text-blue-700 w-[100%] p-4 flex items-center my-6'>
                    <code className='w-[86%] overflow-hidden overflow-ellipsis whitespace-nowrap'>
                        https://be-econusantara.vercel.app/v1/api/spice
                    </code>
                    <div onClick={() => copyToClipboard2()} className='absolute right-1 z-[444] scale-[0.9] z-[999] rounded-[10px] shadow-lg w-[50px] h-[50px] bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:p-2 duration-200 text-white'>
                        <FaCopy />
                    </div>
                </div>
                <label htmlFor="api-dinas" className='font-[500] md:flex items-center'>
                    Data Sebaran Kuliner 
                    <div className="w-max mt-3 md:mt-0 md:ml-auto flex items-center">
                        <div className='w-max bg-green-400 mr-4 px-3 py-2 w-max h-max text-[10px] rounded-md text-white'>
                            (GET)
                        </div>
                        <p onClick={() => {setSelectAPI('kuliner'), setActiveAPI(true)}} className='text-blue-600 md:hidden cursor-pointer active:scale-[0.98] hover:text-blue-800'>
                            Lihat Respon
                        </p>    
                    </div>
                    <p onClick={() => {setSelectAPI('kuliner'), setActiveAPI(true)}} className='text-blue-600 cursor-pointer md:flex hidden active:scale-[0.98] hover:text-blue-800'>
                        Lihat Respon
                    </p>
                </label>
                <div className='relative rounded-[10px] bg-blue-200 text-blue-700 w-[100%] p-4 flex items-center my-6'>
                    <code className='w-[86%] overflow-hidden overflow-ellipsis whitespace-nowrap'>
                        https://be-econusantara.vercel.app/v1/api/culinary
                    </code>
                    <div onClick={() => copyToClipboard3()} className='absolute right-1 z-[444] scale-[0.9] z-[999] rounded-[10px] shadow-lg w-[50px] h-[50px] bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:p-2 duration-200 text-white'>
                        <FaCopy />
                    </div>
                </div>
                <div className={`fixed top-0 ${activeAPI ? 'left-[0%]' : 'left-[-100%] duration-300'} ease-in-out duration-300 w-max rounded-tr-[20px] shadow-lg h-screen z-[99999999] bg-white text-blue-700 flex items-center justify-center`}>
                <div className='relative w-full h-screen overflow-y-auto pb-10 rounded-[12px]'>
                    <code>
                        <div className='relative mx-auto mt-8 w-[88%] flex items-center'>
                            <div className='w-max bg-slate-400 px-5 py-2 w-max h-max ml-2 text-[14px] rounded-lg text-white'>{selectAPI ?? ''}</div>
                            <div className='w-max bg-blue-500 px-5 py-2 w-max h-max ml-2 text-[14px] rounded-lg text-white'>Response</div>
                            <div className='w-max bg-green-500 px-5 py-2 w-max h-max ml-2 text-[14px] rounded-lg text-white'>200</div>
                            <div onClick={() => setActiveAPI(false)} className='ml-auto bg-red-500 flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] w-[40px] h-[40px] ml-2 text-[14px] rounded-lg text-white'><FaTimes /></div>
                        </div>
                        <div className='w-[42vw] mx-auto pt-10'>
                            <pre className='w-[90%] mx-auto p-6 rounded-[20px] border border-blue-200 h-max'>
                                {
                                selectAPI === 'pemandu' ? (
                                    JSON.stringify(yourJsonObjectPemandu, null, 2)
                                        ): selectAPI === 'rempah' ? (
                                            JSON.stringify(yourJsonObjectRempah, null, 2)
                                        ): selectAPI === 'kuliner' ?(
                                            JSON.stringify(yourJsonObjectKuliner, null, 2)
                                        ):
                                            JSON.stringify(yourJsonObjectTour, null, 2)
                                    }
                                </pre>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
            <div className='relative w-1/2 h-[500px] hidden md:flex flex-col justify-center items-center overflow-hidden'>
                <img src={Kalimantan} alt="ilustration developer" title='Image by freepik' className='w-[100%] right-[-30px] top-2 relative' />
            </div>
        </div>
    </section>
  )
}

export default Api
