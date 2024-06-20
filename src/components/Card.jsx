import React from 'react';

function Card(props) {
  return (
    <div className='w-full hover:cursor-pointer hover:scale-105 transition duration-300'>
      <div className="flex justify-center">
        <div className='w-11/12 flex flex-col items-center align-middle justify-center'>
          <div className='relative'>
            <img src={props.img} alt="photo" className='rounded-lg ' />
            <img src="" alt="" className='absolute right-3 top-2' />
          </div>
          <div className='2xl:w-68 xl:w-64 md:w-56 sm:w-64 w-full'>
            <div className='sm:pl-3 w-11/12'>
              <div className='flex justify-between'>
                <p className='font-semibold'>{props.location}</p>
                <p className='font-semibold'>&#9733;{" "}{props.star}</p>
              </div>
              <p className='text-gray-500'>{props.title}</p>
              <p className='font-normal'>{props.price}t</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
