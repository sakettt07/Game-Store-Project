import React from 'react'
import GenreList from '../components/GenreList';

const Home = () => {
  return (
    <div className='grid grid-cols-4 px-5'>
      <div className='bg-red-600 h-full hidden md:block'>
        <GenreList />
      </div>
      <div className='bg-blue-400 col-span-4 md:col-span-3'>Game List</div>
    </div>
  )
}

export default Home;
