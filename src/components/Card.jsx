import React from 'react'

function Card(props) {
  return (
    <div className='w-11/12 sm:w-auto'>
        <div className='relative '>
            <img src={props.img} alt="photo" className='rounded-lg sm:w-68 sm:h-68 w-full ' />
            <img src="" alt="" className='absolute right-3 top-2'/>
        </div>
        <div className='sm:w-68 w-10/12'>
          <div className='flex justify-between'>
            <p className='font-semibold'>{props.location}</p>
            <p className='font-semibold'>&#9733;{" "}{props.star}</p>
          </div>
            <p className='text-gray-500'>{props.description}</p>
            <p className='font-normal'>{props.price}t</p>
        </div>
    </div>
  )
}

export default Card