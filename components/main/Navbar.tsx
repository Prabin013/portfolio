"use client"
import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='/' className='h-auto w-auto flex flex-row items-center cursor-pointer'>
          <Image
            src="/NavLogo.png"
            alt='logo'
            width={50}
            height={20}
            className='cursor-pointer'
          />

          <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
            Prabin Adhikari
          </span>
        </a>

        {/* Hamburger Menu Icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-gray-300 focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:w-[500px] md:h-full md:flex-row md:justify-between md:mr-20 absolute md:relative top-[65px] left-0 w-full bg-[#030014] md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <div className='flex flex-col md:flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href='/about' className='cursor-pointer mb-4 md:mb-0 hover:text-purple-400' onClick={closeMenu}>
              About me
            </a>
            <a href='/#skills' className='cursor-pointer mb-4 md:mb-0 hover:text-purple-400' onClick={closeMenu}>
              Skills
            </a>
            <a href='/#projects' className='cursor-pointer hover:text-purple-400' onClick={closeMenu}>
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className='hidden md:flex flex-row gap-5'>
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className='hover:opacity-80'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;