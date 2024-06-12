import React from 'react'

function Header() {
  return (
    <header>
        <div className='grid col-span-3'>
            <a>
                <img src='../../airbnb.svg' className='hover:cursor-pointer px-20 py-3 h-auto'/>
            </a>
            <div>
                <p>Stays</p>
                <p>Experiences</p>
                <p>Online Experiences</p>
            </div>
            <div>
                <p>Airbnb your home</p>
                <img src='../../globe-icon.svg' />
                <div>
                <img src='../../globe-icon.svg' />
                <img src='../../globe-icon.svg' />
                </div>
            </div>
        </div>
    </header>
  ) 
}

export default Header