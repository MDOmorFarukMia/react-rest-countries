import React, { useEffect, useState } from 'react';
import GoogleImg from '../../Images/google-1-1 1.png'
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
    const [jobsData, setJobsData] = useState([])
    const [isAllJob, setAllJobs ] = useState(false)

    useEffect(() => {
      fetch('jobs.json')
      .then(res=> res.json())
      .then(data=> setJobsData(data))
    }, [])
   
    const allJobToSee = () =>{  
        setAllJobs(x=>!x)
    
      } 


    const jobsToShow = isAllJob? jobsData.length : 4

    return (
        <div className='mt-24'>
            <h2 className='text-5xl font-bold mt-6'>Featured Jobs</h2>
            <p className='mt-4 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    jobsData
                    ?.filter((x, inx)=> inx < jobsToShow )                    
                    ?.map(job => <div className='text-left m-6 p-10 border border-gray-200 rounded-md shadow-md'>
                    <img className='w-32' src={job.companyLogo} alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>{job.jobTitle}</h3>
                    <p className='text-md text-gray-500'>{job.companyName}</p>
                    <div className='flex '>
                        <span className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">{job.remoteOrOnsite}</span>
                        <span className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">{job.fullTimeOrPartTime}</span>
                    </div>
                    <div className='flex'>
                        <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> {job.location}</p>
                        <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: {job.salary} </p>
                    </div>
                    <div className='mt-5'>

                    <Link  to={`/detail/${job.id}`}  className='mt-4 p-2 px-3 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</Link>
                    </div>
                </div> )
                }
              
             
                {/* <div className='text-left m-6 p-10 border border-gray-200 rounded-md shadow-md'>
                    <img className='w-32' src={GoogleImg} alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>Technical Database Engineer</h3>
                    <p className='text-md text-gray-500'>Google LLC</p>
                    <div className='flex '>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Remote</a>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Full Time</a>
                    </div>
                    <div className='flex'>
                        <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> Dhaka, Bangladesh</p>
                        <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: 100K - 150K </p>
                    </div>
                    <button className='mt-4 p-2 px-3 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</button>
                </div>
                <div className='text-left m-6 p-10 border border-gray-200 rounded-md shadow-md'>
                    <img className='w-32' src={GoogleImg} alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>Technical Database Engineer</h3>
                    <p className='text-md text-gray-500'>Google LLC</p>
                    <div className='flex '>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Remote</a>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Full Time</a>
                    </div>
                    <div className='flex'>
                        <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> Dhaka, Bangladesh</p>
                        <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: 100K - 150K </p>
                    </div>
                    <button className='mt-4 p-2 px-3 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</button>
                </div>
                <div className='text-left m-6 p-10 border border-gray-200 rounded-md shadow-md'>
                    <img className='w-32' src={GoogleImg} alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>Technical Database Engineer</h3>
                    <p className='text-md text-gray-500'>Google LLC</p>
                    <div className='flex '>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Remote</a>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Full Time</a>
                    </div>
                    <div className='flex'>
                        <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> Dhaka, Bangladesh</p>
                        <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: 100K - 150K </p>
                    </div>
                    <button className='mt-4 p-2 px-3 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</button>
                </div>
                <div className='text-left m-6 p-10 border border-gray-200 rounded-md shadow-md'>
                    <img className='w-32' src={GoogleImg} alt="" />
                    <h3 className='mt-4 text-2xl font-bold'>Technical Database Engineer</h3>
                    <p className='text-md text-gray-500'>Google LLC</p>
                    <div className='flex '>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Remote</a>
                        <a className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' href="">Full Time</a>
                    </div>
                    <div className='flex'>
                        <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> Dhaka, Bangladesh</p>
                        <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: 100K - 150K </p>
                    </div>
                    <button className='mt-4 p-2 px-3 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</button>
                </div> */}
               
            </div>
            <button onClick={allJobToSee} className='mt-4 p-2 px-3 text-sm font-bold text-white rounded-md bg-purple-500' >{isAllJob ? 'Show less' : 'Show all'} </button>
        </div>
    );
};

export default FeaturedJobs;