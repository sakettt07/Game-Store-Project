import React from 'react'
import { useEffect } from 'react'

const GamesByGenres = ({gamelistbygenre}) => {
    useEffect(()=>{
        console.log('gamelist h yeh genre wali',gamelistbygenre);
    },[])
  return (
    <div className='mt-4'>
        <h1 className='font-bold text-[33px] mb-2 dark:text-white'>Genre Games</h1>
      <div>
        {gamelistbygenre.map((item)=>(
            <div>
                <img src={item.background_image} />
                <h2>{item.name} <span>{item.metacritic}</span></h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default GamesByGenres
