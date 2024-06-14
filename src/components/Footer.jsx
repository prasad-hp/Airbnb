import React from 'react'

function Footer() {
  return (
    <footer className='lg:px-20 md:px-10 sm:px-5 w-screen flex justify-center'>
        <div className='w-3/5'>
            <h1 className='text-xl font-bold'>Inspiration for future getaways</h1>
            <div className='flex space-x-14 overflow-x-auto font-semibold text-gray-500'>
                <p>Popular</p>
                <p>Art & culture</p>
                <p>Outdoors</p>
                <p>Mountains</p>
                <p>Beach</p>
                <p>Unique stays</p>
                <p>Categories</p>
                <p>Things to do</p>

            </div>
            <div className='flex justify-center space-x-72'>
                <div>
                    <h2 className='font-semibold'>Support</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>AirCover</li>
                        <li>Anti-descrimination</li>
                        <li>Disability support</li>
                        <li>Cancellation options</li>
                        <li>Report neighbourhood concern</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold'>Hosting</h2>
                    <ul>
                        <li>Airbnb your home</li>
                        <li>AirCover for Hosts</li>
                        <li>Hosting resources</li>
                        <li>Community forum</li>
                        <li>Hosting responsibly</li>
                        <li>Join a free Hosting class</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold'>Airbnb</h2>
                    <ul>
                        <li>Newsroom</li>
                        <li>New features</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Airbnb.org emergency stays</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer