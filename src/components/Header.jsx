import React from 'react';

function Header() {
  return (
    <div>
        {/* Desktop Header */}
        <header className='hidden sm:inline-block w-full'>
            <div className='grid grid-cols-3 px-20 py-3'>
                <a href="/">
                    <img src='../../airbnb.svg' alt='Airbnb Logo' className='hover:cursor-pointer h-auto'/>
                </a>
                <div className='flex items-center justify-center space-x-7'>
                    <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700 hidden lg:inline-block'>Stays</button>
                    <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700 hidden lg:inline-block'>Experiences</button>
                    <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700 hidden lg:inline-block'>Online Experiences</button>
                </div>
                <div className='flex items-center justify-end space-x-5'>
                    <button className='hover:bg-gray-100 rounded-full p-3 px-4 font-semibold text-gray-700 hover:cursor-pointer'>Airbnb your home</button>
                    <img src='../../globe-icon.svg' alt='Globe Icon' className='w-5 hover:cursor-pointer'/>
                    <div className='flex items-center space-x-2 border-2 border-gray-200 rounded-full py-1 px-2 hover:shadow-md'>
                        <img src='../../menu-icon.svg' alt='Menu Icon' className='w-5 hover:cursor-pointer'/>
                        <img src='../../account-circle.svg' alt='Account Icon' className='w-9 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>
        </header>
        {/* Medium screen Header */}
        <div className='hidden sm:inline-block lg:hidden w-full'>
            <div className='flex justify-center'>
                <div className='flex justify-center w-3/5'>
                    <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700'>Stays</button>
                    <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700'>Experiences</button>
                    <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700'>Online Experiences</button>
                </div>
            </div>
        </div>
        {/* Search bar for larger screens */}
        <div className='hidden sm:inline-block w-full'>
            <div className='flex justify-center'>
                <div className='w-full md:w-3/4 lg:w-1/2 text-center grid grid-cols-6 justify-center border border-gray-100 bg-white rounded-full shadow-md h-16'>
                    <div className='grid grid-cols-1 grid-rows-2 justify-start col-span-2 hover:bg-gray-200 rounded-full pl-6'>
                        <label htmlFor="destinations" className='text-left pt-2 text-sm'>Where</label>
                        <input type="text" placeholder='Search destinations' id='destinations' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200'/>
                    </div>
                    <div className='grid grid-cols-1 grid-rows-2 justify-start col-span-1 hover:bg-gray-200 rounded-full pl-6'>
                        <label htmlFor="checkin" className='text-left pt-2'>Check in</label>
                        <input type="text" placeholder='Add dates' id='checkin' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200'/>
                    </div>
                    <div className='grid grid-cols-1 grid-rows-2 justify-start col-span-1 hover:bg-gray-200 rounded-full pl-6'>
                        <label htmlFor="checkout" className='text-left pt-2'>Check out</label>
                        <input type="text" placeholder='Add dates' id='checkout' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200'/>
                    </div>
                    <div className='flex justify-around col-span-2 hover:bg-gray-200 rounded-full pl-6'>
                        <div className='grid grid-cols-1 grid-rows-2 justify-start pl-4'>
                            <label htmlFor="who" className='text-left pt-2 text-sm'>Who</label>
                            <input type="text" placeholder='Add guests' id='who' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200'/>
                        </div>
                        <button type='submit' className='px-2'>
                            <img src="../../search-icon.svg" alt="Search Icon" className='bg-red-500 rounded-full p-3 w-12'/>
                            <p className='hidden active:inline-block'>Search</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Header */}
        <header className='w-full flex justify-center py-3'>
            <div className='inline-block sm:hidden shadow-md w-11/12 rounded-full'>
                <div className='flex justify-start items-center rounded-full cursor-pointer'>
                    <img src="../../search-icon-black.svg" alt="search icon" className='w-16 p-4'/>
                    <div>
                        <p className='font-semibold text-gray-700'>Where to?</p>
                        <p className='text-gray-400 text-sm'>Anywhere &#8226; Any week &#8226; Add guests</p>
                    </div>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
