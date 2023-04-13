import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
       
            <nav className='flex items-center justify-between flex-wrap bg-blue-50 px-20 py-10'>
              <div className='flex items-center flex-shrink-0 text-gray-800 mr-6'>
                <h1 className='text-xl font-bold'>
                  <Link to='/'>KormoTalaash</Link>
                </h1>
              </div>
              <div className='block lg:hidden'>
                <button
                  className='flex items-center px-3 py-3 mt-2 border rounded text-gray-800 border-gray-800 hover:text-indigo-400 hover:border-indigo-400'
                  onClick={handleMenuClick}
                >
                  <svg
                    className='h-3 w-3 fill-current'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Menu</title>
                    <path
                      d='M0 0h20v20H0V0zm2 2h16v16H2V2zm3 5h10v2H5V7zm0 4h10v2H5v-2zm0 4h10v2H5v-2z'
                      fillRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isMenuOpen ? 'block' : 'hidden'
                } w-full lg:block lg:flex lg:items-center lg:w-auto`}
              >
                <ul className='text-gray-400 lg:flex-grow lg:flex lg:items-center lg:justify-end'>
                  <li className='block lg:inline-block lg:mt-0 text-lg mr-4'>
                    <Link
                      to='/'
                      onClick={handleMenuClick}
                      className='text-gray-400 hover:text-indigo-400'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='block lg:inline-block lg:mt-0 text-lg mr-4'>
                    <Link
                      to='/statistics'
                      onClick={handleMenuClick}
                      className='text-gray-400 hover:text-indigo-400'
                    >
                      Statistics
                    </Link>
                  </li>
                  <li className='block lg:inline-block lg:mt-0 text-lg mr-4'>
                    <Link
                      to='/AppliedJobs'
                      onClick={handleMenuClick}
                      className='text-gray-400 hover:text-indigo-400'
                    >
                      Applied Jobs
                    </Link>
                  </li>
                  <li className='block lg:inline-block lg:mt-0 text-lg mr-4'>
                    <Link
                      to='/blog'
                      onClick={handleMenuClick}
                      className='text-gray-400 hover:text-indigo-400'
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-4 lg:mt-0 ml-10'>
                <button className='bg-indigo-500 hover:bg-indigo-200 h-10 w-auto lg:w-auto text-white hover:text-gray-500 border rounded-md px-2'>
                  Start Applying
                </button>
              </div>
            </nav>
    );
};
// 
export default Navbar;