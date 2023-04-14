import React, { useState } from 'react';
import Banner from '../../components/Banner';
import JobsCategory from '../../components/JobCatagory/JobsCatagory';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../../components/SingleJob';


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    const [jobs, setJobs] = useState(data);
    const [showAll, setShowAll] = useState(false);

    return (
        <div>
            <Banner></Banner>
            <JobsCategory></JobsCategory>

            <div className='text-center py-20 mx-20'>
                <h1 className='font-bold text-5xl py-10'>Featured Jobs</h1>
                <p className='text-gray-500 pb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    {showAll
                        ? jobs.map((job => <SingleJob key={job.id} job={job}></SingleJob>))
                        : jobs.slice(0, 4).map((job => <SingleJob key={job.id} job={job}></SingleJob>))
                    }

                </div>
                <div className="text-center">
                    {!showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn btn-sm btn-secondary my-4"
                        >
                            Show All
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Home;