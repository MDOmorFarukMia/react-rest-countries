import React, { useState } from 'react';
import GoogleImg from '../../Images/google-1-1 1.png';
import { Link, useLoaderData } from 'react-router-dom';


const AppliedJob = () => {
  const jobs = useLoaderData()
  const [filters, setfilters] = useState('')

  
  const filterHandler = (x) =>{
    setfilters(x)
  }



    return (
        <div>
            <div>
                <h2 className=' p-24 bg-violet-100  text-4xl font-bold'>Applied Jobs</h2>
            </div>
            <div className='flex justify-end mt-8 mb-3'> 
            <button onClick={()=> filterHandler('Remote')} className='w-48 h-12 mt-28 text-sm font-bold text-white rounded-md bg-purple-500'>Remote</button>
            <button onClick={()=> filterHandler('Onsite')} className='w-48 h-12 mt-28 text-sm font-bold text-white rounded-md bg-purple-500'>Onsite</button>
      </div>
      {
            jobs?.length > 0 ? ( filters.length> 0  ? jobs?.filter(x => x.remoteOrOnsite.toLowerCase() === filters.toLowerCase())
            .map(job =>  <div className='mt-12 m-4 flex border border-gray-200 rounded-md shadow-md'>
            <div className='w-3/4 flex text-left m-6 p-10 '>
                <div className='bg-gray-200 p-8 rounded-md'>
                    <img className='mt-6 w-32 h-12' src={job.companyLogo} alt="" />
                </div>
                <div className='ml-6'>
                    <h3 className='mt-1 mb-2 text-2xl font-bold'>{job.jobTitle}</h3>
                    <p className='mb-2 text-md text-gray-500'>{job.companyName}</p>
                    <div className='flex mb-2 '>
                        <span className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' >{job.remoteOrOnsite}</span>
                        <span className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 '>{job.fullTimeOrPartTime}</span>
                    </div>
                    <div className='flex mb-2'>
                        <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> {job.location}</p>
                        <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: {job.salary} </p>
                    </div>
                </div>
            </div>
            <Link  to={`/detail/${job.id}`} className='w-48 h-12 mt-28 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</Link>

        </div> ) : jobs?.map(job =>  <div className='mt-12 m-4 flex border border-gray-200 rounded-md shadow-md'>
                <div className='w-3/4 flex text-left m-6 p-10 '>
                    <div className='bg-gray-200 p-8 rounded-md'>
                        <img className='mt-6 w-32 h-12' src={job.companyLogo} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h3 className='mt-1 mb-2 text-2xl font-bold'>{job.jobTitle}</h3>
                        <p className='mb-2 text-md text-gray-500'>{job.companyName}</p>
                        <div className='flex mb-2 '>
                            <span className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 ' >{job.remoteOrOnsite}</span>
                            <span className='text-sm text-purple-600 border border-purple-500 rounded-md mt-1 mr-2 px-4 py-2 '>{job.fullTimeOrPartTime}</span>
                        </div>
                        <div className='flex mb-2'>
                            <p className='mt-2 mr-2 text-gray-600 text-sm'><img src="" alt="" /> {job.location}</p>
                            <p className='mt-2 text-gray-600 text-sm'><img src="" alt="" /> Salary: {job.salary} </p>
                        </div>
                    </div>
                </div>
                <Link  to={`/detail/${job.id}`} className='w-48 h-12 mt-28 text-sm font-bold text-white rounded-md bg-purple-500'>View Details</Link>

            </div> ) ) : <h4>you did not applied any job </h4>   
          }
 
        </div>
    );
};

export default AppliedJob;