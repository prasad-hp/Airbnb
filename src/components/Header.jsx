import React, { useEffect, useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const transisionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transisionNavBar);
        return () => window.removeEventListener("scroll", transisionNavBar);
    }, []);

    return (
        <div className='fixed top-0 bg-white z-50 w-full'>
            {/* Desktop Header */}
            <header className='hidden sm:inline-block w-full '>
                <div className='grid grid-cols-3 px-20 py-3 w-full'>
                    <a href="/">
                        <img src='../../airbnb.svg' alt='Airbnb Logo' className='hover:cursor-pointer h-auto'/>
                    </a>
                    <div className={`flex items-center justify-center space-x-7 ${show && "hidden"}`}>
                        <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700 hidden lg:inline-block'>Stays</button>
                        <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700 hidden lg:inline-block'>Experiences</button>
                        <button className='hover:bg-gray-100 hover:cursor-pointer rounded-full p-3 px-4 text-gray-500 font-normal hover:text-gray-700 hidden lg:inline-block'>Online Experiences</button>
                    </div>
                    <div className={`hidden ${show && "md:inline-block"} transition duration-300`}>
                        <div className='flex items-center justify-center'>
                            <div className='flex space-x-5 items-center justify-between border border-gray p-2 shadow-md rounded-full pl-4'>
                                <div>Anywhere</div>
                                <div>Any week</div>
                                <div>Add guests</div>
                                <div className='bg-red-500 rounded-full p-1'>
                                    <img src="../search-icon.svg" alt="search icon" />
                                </div>
                            </div>
                        </div>
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
            <div className={`w-full hidden sm:inline-block`}>
                <div className={`${show && "hidden"} transition duration-300`}>
                    <div className='flex justify-center'>
                        <div className='w-full md:w-3/4 lg:w-1/2 text-center grid grid-cols-6 justify-center border border-gray-100 bg-white rounded-full shadow-md h-16'>
                            <div className='group grid grid-cols-1 grid-rows-2 justify-start col-span-2 hover:bg-gray-200 rounded-full pl-6'>
                                <label htmlFor="destinations" className='text-left pt-2 text-sm'>Where</label>
                                <input type="text" placeholder='Search destinations' id='destinations' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200 group-hover:bg-slate-200'/>
                            </div>
                            <div className={`group grid grid-cols-1 grid-rows-2 justify-start col-span-1 hover:bg-gray-200 rounded-full pl-6`}>
                                <label htmlFor="checkin" className='text-left pt-2'>Check in</label>
                                <input type="text" placeholder='Add dates' id='checkin' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200 group-hover:bg-slate-200'/>
                            </div>
                            <div className='group grid grid-cols-1 grid-rows-2 justify-start col-span-1 hover:bg-gray-200 rounded-full pl-6'>
                                <label htmlFor="checkout" className='text-left pt-2'>Check out</label>
                                <input type="text" placeholder='Add dates' id='checkout' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200 group-hover:bg-slate-200'/>
                            </div>
                            <div className='group flex justify-around col-span-2 hover:bg-gray-200 rounded-full pl-6'>
                                <div className=' grid grid-cols-1 grid-rows-2 justify-start pl-4'>
                                    <label htmlFor="who" className='text-left pt-2 text-sm'>Who</label>
                                    <input type="text" placeholder='Add guests' id='who' className='outline-none w-3/4 h-4 bg-white hover:bg-gray-200 group-hover:bg-slate-200'/>
                                </div>
                                <button type='submit' className='px-2'>
                                    <img src="../../search-icon.svg" alt="Search Icon" className='bg-red-500 rounded-full p-3 w-12'/>
                                    <p className='hidden active:inline-block'>Search</p>
                                </button>
                            </div>
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
            <div className={`${show && "mt-3 absolute top-16 transition duration-500"}`}>
                <hr />
                <div className={`h-16 lg:px-20 md:px-10 sm:px-5 w-screen content-center bg-white z-50 mt-3`}>
                    <div className='flex justify-between items-center space-x-2'>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/local.svg" alt="Local" />
                            <p className='hover:font-semibold'>Local</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/ac_unit_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>AC Homes</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/agriculture_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Farms</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/bathtub_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Bathtub</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/cabin_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Cabin</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/directions_car_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Adventure</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/forest_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Forest</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/holiday_village_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Village</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/home_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Sweet Home</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/hot_tub_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Hottub</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/houseboat_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Boat House</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/landscape_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Mountains</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/pool_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Pools</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/rocket_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Execiting</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/shower_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Shower</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/villa_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Villa</p>
                        </div>
                        <div className='flex flex-col items-center hover:font-semibold hover:scale-105 transition duration-150 hover:cursor-pointer'>
                            <img src="../navbarIcons/water_drop_24dp.svg" alt="Local" />
                            <p className='hover:font-semibold'>Rainy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
