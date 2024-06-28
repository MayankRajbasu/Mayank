// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
    activeLink: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink }) => {
    return (
        <nav className='flex justify-between items-center absolute w-full lg:px-20 md:px-12 xsm:px-6 md:py-6 xsm:py-6 z-10 '>
            <div className="logo w-8 h-8 "><a href="/"><img src='dist/images/m-logo.svg'></img></a></div>
            <div className='sd:flex content-center justify-between xsm:hidden'>
                <ul className='flex flex-wrap justify-between content-center'>
                    <a href="#about" className={activeLink === "about" ? "active px-3 font-regular hover:text-teal-400" : "px-3 font-regular hover:text-teal-400"}>about</a>
                    <a href="#works" className={activeLink === "works" ? "active px-3 font-regular hover:text-teal-400" : "px-3 font-regular hover:text-teal-400"}>Experience</a>
                    <a href="#projects" className={activeLink === "projects" ? "active px-3 font-regular hover:text-teal-400" : "px-3 font-regular hover:text-teal-400"}>projects</a>
                    <a href="#contact" className={activeLink === "contact" ? "active pl-3 font-regular hover:text-teal-400" : "pl-3 font-regular hover:text-teal-400 hover:cursor-pointer"}>contacts</a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
