import React from 'react'
import { useEffect } from 'react'

const GamesByGenres = ({gamelistbygenre}) => {
  return (
    <div className='mt-4'>
        <h1 className='font-bold text-[33px] mb-2 dark:text-white'>Genre Games</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {gamelistbygenre.map((item)=>(
            <div className='rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 group hover:scale-95 cursor-pointer transition-all duration-100 ease-in' >
                <img className='w-full h-[80%] rounded-2xl object-cover' src={item.background_image} />
                <h2 className='dark:text-white text-[17px] font-semibold pl-4'>{item.name}</h2>
                <h2 className='dark:text-white pl-6'>⭐{item.rating}  🗨️{item.ratings_count}  🚀{item.released}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default GamesByGenres
