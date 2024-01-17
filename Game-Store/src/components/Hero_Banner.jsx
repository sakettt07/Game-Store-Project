import React, { useEffect } from 'react'

const Hero_Banner = ({gamebanner}) => {
  useEffect(()=>{
    // console.log(gamebanner);

  },[])
  return (
    <div className='relative'>
      <div className='absolute p-8 left-0 bottom-0 bg-gradient-to-t from-black to-transparent w-full rounded-xl'>
        <h1 className='text-[24px] text-white font-bold'>{gamebanner.name}</h1>
        <button className='bg-green-400 text-black px-2 p-1 rounded hover:bg-green-950 hover:text-white'>Get Now</button>
      </div>
      <img src={gamebanner.background_image} className='h-[400px] w-full object-cover rounded-3xl pl-2 transition-all ease-in-out duration-1100 ' />
    </div>
  )
}

export default Hero_Banner
