import React, { useState, useEffect } from 'react';
import Job from './Job';

const JobsCategory = () => {
  const [jobsType, setJobsType] = useState([]);

  useEffect(() => {
    const fetchJobsType = async () => {
      const response = await fetch('/jobsCatagory.json');
      const data = await response.json();
      setJobsType(data);
    };

    fetchJobsType();
  }, []);

  return (
    <div className=' text-center pt-10 px-20'>
      <h1 className=' text-5xl font-bold py-4'>Job Category List</h1>
      <p className=' text-gray-400 py-10'>Explore thousands of job opportunities with all the information you need. Its your future .</p>
      <div className=' flex flex-col lg:flex-row justify-evenly lg:mx-10 gap-4 py-10 '>
        {jobsType.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default JobsCategory;