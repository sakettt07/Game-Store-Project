import React from 'react';
import GlobalApi from '../services/GlobalApi';
import { useEffect } from 'react';

const GenreList = () => {
    useEffect(()=>{
        getGenreList();
    })
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            // console.log(resp.data.results);
        })
    }
  return (
    <div>
      GenreList
    </div>
  )
}

export default GenreList
