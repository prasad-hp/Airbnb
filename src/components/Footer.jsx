import React from 'react'
import { data } from '../../public/public'
import FooterCard from './FooterCard'

function Footer() {
    const popular = data.popular
    const artAndCulture = data.artAndCulture
  return (
    <footer className='lg:px-20 md:px-10 sm:px-5 w-screen flex flex-col items-center justify-center bg-gray-50 mt-10'>
        <div className='w-3/5'>
            <h1 className='text-xl font-bold py-5'>Inspiration for future getaways</h1>
            <div className='flex space-x-14 overflow-x-hidden font-semibold text-gray-500'>
                <p className='hover:cursor-pointer text-black'>Popular</p>
                <p className='hover:cursor-pointer hover:text-black'>Art & culture</p>
                <p className='hover:cursor-pointer hover:text-black'>Outdoors</p>
                <p className='hover:cursor-pointer hover:text-black'>Mountains</p>
                <p className='hover:cursor-pointer hover:text-black'>Beach</p>
                <p className='hover:cursor-pointer hover:text-black'>Unique stays</p>
                <p className='hover:cursor-pointer hover:text-black'>Categories</p>
                <p className='hover:cursor-pointer hover:text-black'>Things to do</p>
            </div>
            <div className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mt-8'>
                {artAndCulture.map((item, index)=>{
                    return(
                        <FooterCard key={index} name={item.name} rental_type={item.rental_type}/>
                    )
                })}
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
        <div className='flex justify-between w-3/5 py-5'>
            <div className='flex space-x-5'>
                <p>© 2024 Airbnb, Inc.</p>   
                <p>Privacy</p>
                <p>Terms</p>
                <p>Sitemap</p>
                <p>Company Details</p>
            </div>
            <div className='flex space-x-5 items-center'>
                <img src="../../globe-icon.svg" alt="globe" />
                <p>English (IN)</p>
                <p>₹ INR</p>
                <img src="../../facebook.svg" alt="Facebook Logo" className='w-8'/>
                <img src="../../twitter.svg" alt="Twitter Logo" className='w-8'/>
                <img src="../../instagram.svg" alt="Instagram Logo" className='w-8'/>
  

            </div>
        </div>
    </footer>
  )
}

export default Footer