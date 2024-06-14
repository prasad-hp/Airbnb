import React from 'react';

function Card(props) {
  return (
    <div className='w-full hover:cursor-pointer hover:scale-105 transition duration-300'>
      <div className="flex justify-center">
        <div className='w-11/12 flex flex-col items-center align-middle justify-center'>
          <div className='relative'>
            <img src={props.img} alt="photo" className='rounded-lg 2xl:h-60 xl:h-56 md:h-48 sm:h-60 2xl:w-64 xl:w-60 md:w-52 sm:w-64' />
            <img src="" alt="" className='absolute right-3 top-2' />
          </div>
          <div className='2xl:w-60 xl:w-56 md:w-48 sm:w-60 w-full'>
            <div className='pl-3 w-11/12'>
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
