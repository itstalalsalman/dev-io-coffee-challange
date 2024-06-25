import React from 'react'
import sign from '../assets/vector.svg';

const CollectionBoard = () => {
  return (
    <div className='bg-[#111315] w-[80%] h-[500px] absolute top-[200px] rounded-xl flex flex-col items-center justify-start'>
        <div className='relative w-[500px] h-[300px] top-10 flex flex-col items-center justify-center text-[#FEF7EE]'>
            <img src={sign} className='absolute top-0 right-0'/>
            <h1 className='text-[30px] font-bold'>Our Collection</h1>
            <p className='text-center text-[#6F757C] font-medium'>
                Introducing our Coffee Collection, a selection of unique coffees from different 
                roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
            <div>
                <button>All Products</button>
                <button>Available Now</button>
            </div>
        </div>
    </div>
  )
}

export default CollectionBoard