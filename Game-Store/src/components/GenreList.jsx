import React, { useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { useEffect } from 'react';

const GenreList = ({setGenresId}) => {
  const [genreList,setGenreList]=useState([]);
  const [activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
        getGenreList();
    })
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            // console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }
  return (
    <div>
      <h2 className='text-[30px] font-bold dark:text-white pl-3'>Genres</h2>
      {genreList.map((item,index)=>(
        <div onClick={()=>{setActiveIndex(index);setGenresId(item.id)}} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-1 rounded-xl hover:dark:bg-gray-600 group
        ${activeIndex==index?'bg-gray-300 dark:bg-gray-600':null}`}>
          <img src={item.image_background} className='w-[50px] h-[50px] object-cover rounded-xl ml-4 group-hover:scale-105 transition-all ease-in-out duration-200' />
          <h3 className='text-[18px] group-hover:scale-105 transition-all ease-in-out duration-200 dark:text-white'>{item.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default GenreList
