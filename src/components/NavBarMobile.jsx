import React, { useEffect, useState } from 'react';

function NavBarMobile() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setScrollDirection("down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("up");
      }
      setLastScroll(currentScroll);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div
      className={`${
        scrollDirection === "down" ? "transform translate-y-full" : "transform translate-y-0"
      } inline-block sm:hidden fixed bottom-0 w-full bg-white h-16 shadow-md transition-transform duration-300`}
    >
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
