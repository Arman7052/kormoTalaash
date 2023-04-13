import React from 'react';

const Job = ({job}) => {
    // console.log(job)
    const {id,logo,name,jobs_available} = job;
    return (
        <div className=' bg-blue-50 lg:h-42  lg:w-80 gap-4 lg:mx-10 rounded-lg'>
           <div className='p-6'> 
           <img src={logo} alt="" />
            <h1 className=' text-start font-bold text-lg pt-4'>{name}</h1>
            <p className=' text-start text-gray-500'>{jobs_available} jobs available </p>
           </div>
        </div>
    );
};


export default Job;