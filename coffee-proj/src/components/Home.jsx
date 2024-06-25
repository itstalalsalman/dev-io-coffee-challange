import React from 'react'
import cafe from '../assets/bg-cafe.jpg';
import CollectionBoard from './CollectionBoard';

const Home = () => {
  return (
    <div className='w-full lg:h-[1300px] md:h-[1650px] sm:h-[2000px] bg-black relative flex items-center justify-center'>
        <img src={cafe} alt='cafe-img' className='absolute top-0 w-[100%] h-[350px] object-cover'/>
        <CollectionBoard />
    </div>
  )
}

export default Home