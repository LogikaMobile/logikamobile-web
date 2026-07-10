"use client";
import React, { useState } from 'react';

export default function AdminLogo() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) {
      window.location.href = 'https://logikamobile.com.mx/login';
      setClicks(0); // reset if they come back
    }
  };

  return (
    <img 
      src="/logos/computerLogo.svg" 
      alt="LogikaMobile Logo" 
      className="h-56 md:h-96 mb-14 w-auto relative z-10 cursor-pointer hover:scale-105 transition-transform duration-300" 
      onClick={handleClick}
    />
  );
}
