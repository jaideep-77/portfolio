import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import PDF from '../assets/Resume.pdf'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav((prev) => { return (!prev) });
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-end items-center px-4 m-0 bg-[#0a192f] text-gray-300'>
            {/* main menu */}

            <ul className='hidden md:flex'>
                <li>
                    <a href="#home"> Home </a>
                </li>
                <li>
                    <a href="#experience"> Experience </a>
                </li>
                <li>
                    <a href="#projects"> Projects </a>
                </li>
                <li>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* phone menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <a href="#home"> Home </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#experience"> Experience </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#skills"> Skills </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#projects"> Projects </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>

            <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/jaideep-kular/" target='_blank' rel="noopener noreferrer">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/jaideep-77" target='_blank' rel="noopener noreferrer">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href={PDF} target='_blank' rel="noopener noreferrer">
                            Resume <FaFilePdf size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;