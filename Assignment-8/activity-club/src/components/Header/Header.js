import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <nav className='bg-sky-600 flex items-center justify-between px-10'>
            <div className='flex items-center'>
                <img className='w-16' src={logo} alt="" />
                <h1 className='text-3xl font-bold ml-2'>Activity <span className='text-orange-400'>Club</span></h1>
            </div>
            <ul className='flex gap-4 font-semibold cursor-pointer'>
                <li>Home</li>
                <li>FAQ</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

export default Header;