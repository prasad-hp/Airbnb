import React from 'react';

function NavBarMobile() {
  return (
    <div className='inline-block sm:hidden fixed bottom-0 w-full bg-white h-16 shadow-md'>
      <div className='flex justify-center space-x-14 items-center h-full'>
        <div className='flex flex-col items-center'>
          <img src="../search_red.svg" alt="Search Icon" className="w-6 h-6" />
          <p className='text-red-800 text-xs'>Explore</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="../favorite_border.svg" alt="Wishlist Icon" className="w-6 h-6" />
          <p className='text-gray-700 text-xs'>Wishlist</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="../account_circle.svg" alt="Profile Icon" className="w-6 h-6" />
          <p className='text-gray-700 text-xs'>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default NavBarMobile;
