'use client'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Image from 'next/image';
import { BsPalette2 } from 'react-icons/bs';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import React, { useEffect, useState } from "react";
import {
  FaShuffle, FaChevronLeft, FaChevronRight, FaPlus, FaArrowDown,
  FaCode,
  FaGear,
  FaTrash,
  FaPlay
} from 'react-icons/fa6';
import { Sidebar } from '../app/components/Sidebar';

export default function Home() {
  const [activeButton, setActiveButton] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navItems = ["Home", "About Us", "Solutions", "Our Products", "FAQs", "Contact", "Get Started"];

  return (
    <div className={`flex flex-col justify-start min-h-screen lg:pl-0 ${isLoaded ? 'fade-in' : 'opacity-0'}`} >
      <Sidebar navItems={navItems} />
      <nav className="flex flex-col lg:flex-row w-full items-center mt-6 mb-4 justify-evenly">
        <div className="text-white text-lg mb-4 lg:mb-0">ARENO TECHNOLOGY</div>
        <div className="text-white text-xs items-center hidden lg:flex gap-6">
          {navItems.map((label, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`px-2 py-1 rounded-3xl ${activeButton === index ? "bg-[#2090D0]" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
      <hr
        className="bg-[#2090D0] h-px border-0 shadow-[0_0_10px_#2090D0]"
      />



      <div className="flex flex-col space-y-4 mt-3 px-4 text-white text-sm sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
        <div className='flex flex-wrap gap-2  h-7 justify-center sm:justify-start'>
          <button className="p-1 text-xs rounded flex items-center bg-white text-[#2090D0] hover:bg-blue-100 transition-colors">
            <span className="mr-1">#</span>hero
          </button>
          <button className="p-1 rounded flex items-center bg-white text-[#2090D0] hover:bg-blue-100 transition-colors">
            <BsPalette2 size={15} className="mr-1" />
            <span className="hidden sm:inline text-xs">.dark background</span>
            <span className="sm:hidden text-xs">Theme</span>
          </button>
          <div className='flex justify-center sm:justify-start gap-2'>
            <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Copy">
              <ContentCopyIcon sx={{ fontSize: '16px' }} />
            </button>
            <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Shuffle">
              <FaShuffle />
            </button>
            <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Previous">
              <FaChevronLeft />
            </button>
            <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <button className='flex items-center justify-center gap-1 rounded h-7 p-1 bg-[#2090D0] hover:bg-blue-500 transition-colors'>
          <FaPlus /> <span className="sm:inline text-xs">Add Sections Here</span>
        </button>
        <div className='flex h-7 justify-center sm:justify-end gap-2'>
          <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Download">
            <FaArrowDown />
          </button>
          <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Code">
            <FaCode />
          </button>
          <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Settings">
            <FaGear />
          </button>
          <button className='p-1 rounded bg-[#2090D0] hover:bg-blue-500 transition-colors' title="Delete">
            <FaTrash />
          </button>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-evenly items-center mt-8 px-4'>
        <div className='flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0'>
          <span className='text-white text-3xl md:text-4xl lg:text-5xl mb-4 font-bold'>Shaping the Future with Smart Solutions</span>
          <span className='text-gray-300 text-base md:text-lg w-full lg:w-2/3 mb-4'>Where creativity meets technology to build intelligent
            solutions that connect, empower, and transform industries
            worldwide.</span>
          <button className='flex items-center text-white'>
            <PlayCircleOutlineIcon /> <span className='text-white text-xs ml-1'>Watch Video</span>
          </button>
        </div>
        <div className='w-full lg:w-auto'>
          <Image src='/areno_home_pic.png' width={500} height={500} alt='home_pic' className='w-full h-auto max-w-[500px] mx-auto' />
        </div>
      </div>
    </div>
  );
}

