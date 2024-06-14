import React from 'react'

function FooterCard(props) {
  return (
    <div className='hover:cursor-pointer bg-white shadow m-2 p-2 ml-0 rounded-md border-r border-gray-300 hover:scale-105 transition duration-200'>
        <h1 className='text-sm font-semibold text-black'>{props.name}</h1>
        <h2 className='text-sm text-gray-500'>{props.rental_type} </h2>
    </div>
  )
}

export default FooterCard