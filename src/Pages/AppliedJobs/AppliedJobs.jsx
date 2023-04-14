import React, { useEffect, useState } from 'react';
import SingleJob from '../../components/SingleJob';

const AppliedJobs = () => {

    const [applieds, setAppliedJob] = useState([]);
    const [filterJob, setFilterJob] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("applieds"));
        if (storedData) {
            setAppliedJob(storedData);
            setFilterJob(storedData);
        }
    }, [])

    const handleFilter = (event) => {
        const value = event.target.value;
        const filterData = applieds.filter((item) => item.remote_or_onsite === value);
        setFilterJob(filterData)
    }


    return (

        <div className=' text-right'>
            <h1 className=' font-bold  bg-indigo-50 text-3xl py-10 text-indigo-300'>Applied Jobs</h1>

            <div className="my-3">
                <label htmlFor="">Filter by: </label>
                <select onChange={handleFilter} className="select select-bordered w-full max-w-xs ml-2">
                    <option disabled selected>
                    Select
                    </option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>
            </div>
            {
                filterJob.length>0 ?(
                    filterJob?.map((job) => (
                        <div className="my-4">
                            <SingleJob  job={job} />
                        </div>))
                ) : (<h1 className="text-xl text-center pt-20 font-bold">Sorry You didn't apply any job</h1>)
            }

        </div>
    );
};

export default AppliedJobs;
