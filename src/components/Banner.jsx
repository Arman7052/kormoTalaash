import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row lg:justify-between pt-4 bg-blue-50 lg:px-20 '>
        <div className=' pt-16 mx-2'>
            <h1 className=' text-5xl font-bold py-2'>One Step<br />Closer To Your<br /><span className=' text-indigo-500'>Dream Job</span></h1>
            <p className=' text-gray-400 py-2'>Explore thousands of job opportunities with all the<br />information you need. Its your future. Come find it. Manage all<br />your job application from start to finish.</p>
            <button className=' bg-indigo-400 border rounded-md text-center text-white text-sm  p-2'>Get Started</button>
        </div>
        <div>
            <img className=' h-2/4 lg:h-96 w-auto lg:w-auto' src="https://i.ibb.co/2YtV5wJ/P3-OLGJ1-copy-1.png" alt="" />
        </div>
        </div>
    );
};

export default Banner;