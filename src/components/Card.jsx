import React from 'react'

function Card(props) {
  return (
    <div>
        <div className='relative'>
            <img src={props.img} alt="photo" className='rounded-lg w-64 h-64'/>
            <img src="" alt="" className='absolute right-3 top-2'/>
        </div>
        <div>
            <p className='font-semibold'>{props.title}</p>
            <p className='text-gray-500'>{props.description}</p>
            <p className='font-normal'>{props.status}t</p>
        </div>
    </div>
  )
}

export default Card