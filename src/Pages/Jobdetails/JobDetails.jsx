import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;


    const [applied, setApplied] = useState(false);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("applieds"));
        if (storedData) {
            const exist = storedData.find(item => item.id == id);
            if (exist) {
                setApplied(true)
            }
        }
    }, [job])

    const handleApply = () => {
        const storedData = JSON.parse(localStorage.getItem("applieds"));

        if (storedData) {
            localStorage.setItem("applieds", JSON.stringify([...storedData, job]))

        } else {
            localStorage.setItem("applieds", JSON.stringify([job]))
        }
        setApplied(true)

    }


    return (
        <div className=' text-center bg-indigo-50'>
            <h1 className=' font-bold text-3xl py-10 text-indigo-300'>Job Details</h1>
            <div className="grid lg:grid-cols-3 gap-4 bg-white">
                <div className='lg:col-span-2 p-5 '>
                    <p className=' mx-1 lg:mx-10 text-gray-500 text-left lg:py-5 py-2'><span className=' font-bold text-black'>Job Description: </span>{job_description}</p>
                    <p className=' mx-1 lg:mx-10 text-gray-500 text-left lg:py-5 py-2'><span className=' font-bold text-black'>Job Responsibility: </span>{job_responsibility}</p>
                    <p className=' mx-1 lg:mx-10 text-gray-500 text-left lg:py-5 py-2'><span className=' font-bold text-black'>Educational Requirements:</span></p>
                    <p className=' mx-1 lg:mx-10 text-gray-500 text-left lg:py-2 py-1'>{educational_requirements}</p>
                    <p className=' mx-1 lg:mx-10 text-gray-500 text-left lg:py-5 py-2'><span className=' font-bold text-black'>Experiences:</span></p>
                    <p className=' mx-1 lg:mx-10 text-gray-500 text-left lg:py-2 py-1'>{experiences}</p>
                </div>
                <div className=' py-10 lg:mr-28'>
                    <div className=' bg-indigo-100 rounded-lg p-4'>
                        <h1 className=' text-left font-bold p-1 py-2'>Job Details</h1>
                        <hr className='border border-gray-300 mx-1' />
                        <div className='text-start flex py-2 '>
                            <div className=''><img src="https://i.ibb.co/Pwrcbj6/Frame.png" alt="" /></div>
                            <div> <span className=' font-bold text-gray-600'>Salary :</span></div>
                            <div className=' text-gray-500'>{salary}</div>
                        </div>
                        <div className='text-start flex gap-1 py-2'>
                            <div className=''><img src="https://i.ibb.co/sWs8phh/Frame-1.png" alt="" /></div>
                            <div> <span className=' font-bold text-gray-600'>Job Title :</span></div>
                            <div className=' text-gray-500'>{job_title}</div>
                        </div>


                        <h1 className='text-left font-bold p-1 py-2'>Contact Information :</h1>
                        <hr className='border border-gray-300 mx-1' />

                        <div className='text-start flex gap-1 py-2'>
                            <div className=''><img src="https://i.ibb.co/Pwrcbj6/Frame.png" alt="" /></div>
                            <div> <span className=' font-bold text-gray-600'>Phone :</span></div>
                            <div className=' text-gray-500'>{contact_information.phone}</div>
                        </div>
                        <div className='text-start flex gap-1 py-2'>
                            <div className=''><img src="https://i.ibb.co/Pwrcbj6/Frame.png" alt="" /></div>
                            <div> <span className=' font-bold text-gray-600'>Email :</span></div>
                            <div className=' text-gray-500'>{contact_information.email}</div>
                        </div>
                        <div className='text-start flex gap-1 py-2'>
                            <div className=''><img src="https://i.ibb.co/Pwrcbj6/Frame.png" alt="" /></div>
                            <div> <span className=' font-bold text-gray-600'>Address:</span></div>
                            <div className=' text-gray-500'>{location}</div>
                        </div>
                    </div>
                    <div className='py-3 pt-3'>
                        <button disabled={applied} onClick={handleApply} className="btn btn-primary">
                            {
                                applied ?
                                    "Already Applied"
                                    :
                                    "Apply Now"
                            }

                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobDetails;