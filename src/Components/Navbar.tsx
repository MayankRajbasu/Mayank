// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
    activeLink: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink }) => {
    return (
        <nav className='flex justify-between items-center absolute w-full lg:px-20 md:px-12 xsm:px-6 md:py-6 xsm:py-4 z-10 xsm:backdrop-blur-sm '>
            <div className="logo w-8 h-8"><a href="/Mayank/"><img src='/Mayank/images/m-logo.svg'></img></a></div>
            <div className='sd:flex content-center justify-between xsm:hidden'>
                <ul className='flex flex-wrap justify-between content-center text-xl'>
                    <a href="#about" className={activeLink === "about" ? "active px-3 hover:text-[#FFBE42]" : "px-3 hover:text-text-[#FFBE42]"}>about</a>
                    <a href="#works" className={activeLink === "works" ? "active px-3 hover:text-[#FFBE42]" : "px-3 hover:text-[#FFBE42]"}>Experience</a>
                    <a href="#projects" className={activeLink === "projects" ? "active px-3 hover:text-[#FFBE42]" : "px-3 hover:text-[#FFBE42]"}>projects</a>
                    <a href="#contact" className={activeLink === "contact" ? "active pl-3 hover:text-[#FFBE42]" : "pl-3 hover:text-[#FFBE42] hover:cursor-pointer"}>contacts</a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
