import 'aos/dist/aos.css';
import React from 'react';
import { FramwLB, FramwLT, FramwRB, FramwRT } from '../assets';

const Particle = () => {

  return (
    <>
        <div className='absolute left-[20px] top-[50%] w-[1px] bg-[#d5ab67] h-[45vh] transform translate-y-[-50%]'></div>
        <div className='absolute right-[20px] top-[50%] w-[1px] bg-[#d5ab67] h-[45vh] transform translate-y-[-50%]'></div>
        <div className='absolute right-[50%] top-[20px] h-[1px] bg-[#d5ab67] w-[30vh] transform translate-x-[50%]'></div>
        <div className='absolute left-[50%] bottom-[20px] h-[1px] bg-[#d5ab67] w-[30vh] transform translate-x-[-50%]'></div>
        <img src={FramwLT} alt="partikel" className='absolute w-[65%] left-[-10px] top-[-10px] ' />
        <img src={FramwLB} alt="partikel" className='absolute w-[65%] left-[-10px] bottom-[-10px]' />
        <img src={FramwRT} alt="partikel" className='absolute w-[65%] right-[-10px] top-[-10px] ' />
        <img src={FramwRB} alt="partikel" className='absolute w-[65%] right-[-10px] bottom-[-10px] ' />
    </>
  )
}

export default Particle
