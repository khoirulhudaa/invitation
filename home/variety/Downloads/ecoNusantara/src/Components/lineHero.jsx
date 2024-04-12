import React from 'react'

const LinesHero = () => {
  return (
    <>
        <div className='absolute w-[350px] h-[650px] border-[4px] border-white left-[20px] border-opacity-[0.2] border-dashed'>
        </div>
        <div className='absolute w-screen h-[5px] border-[4px] border-white left-[20px] top-[100px] border-opacity-[0.2] border-dashed'>
        </div>
        <div className='absolute w-screen h-[5px] border-[4px] border-white left-[20px] bottom-[80px] border-opacity-[0.2] border-dashed'>
        </div>
        <div className='absolute h-[650px] w-[5px] border-[4px] border-white left-[50%] border-opacity-[0.2] border-dashed'>
        </div>
        <div className='absolute w-[350px] h-[650px] border-[4px] border-white right-[20px] border-opacity-[0.2] border-dashed'>
        </div>
    </>
  )
}

export default LinesHero
