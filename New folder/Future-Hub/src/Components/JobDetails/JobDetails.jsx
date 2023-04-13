import React from 'react';
import MoneyImg from '../../Images/Frame.png';
import TitleImg from '../../Images/Frame-1.png';
import PhoneImg from '../../Images/Frame-2.png';
import EmailImg from '../../Images/Frame-3.png';
import AddressImg from '../../Images/Frame-4.png';
import { useLoaderData, useParams } from 'react-router-dom'
import { addToDb } from '../../utilities/fakedb';


const JobDetails = () => {
    const {id} = useParams()
  const allJobs = useLoaderData();
  const detailJob = allJobs.find(job=> job.id.toString() === id)
  console.log(detailJob);
  const {id: jobId, jobDescription, jobResponsibility, educationalRequirements, experiences, salary , jobTitle, phone, email, location }  = detailJob

  const applyJobHandler = () =>{        
    addToDb(jobId)
}



    return (
        <div className=''>
            <div>
                <h2 className=' p-32 bg-violet-100  text-4xl font-bold'>Job Details</h2>
            </div>
            <div className=' mt-20 ml-8 flex'>
                <div className='w-3/5 text-left text-gray-500'>
                    <p className='mb-8'><b className='text-black'>Job Description: </b>{jobDescription}</p>
                    <p className='mb-8'><b className='text-black'>Job Responsibility:</b> {jobResponsibility}</p>
                    <h4 className='mb-6 font-bold text-black'>Educational Requirements:</h4>
                    <p className='mb-8'>{educationalRequirements}</p>
                    <h4 className='mb-6 font-bold text-black'>Experiences:</h4>
                    <p className='mb-8'>{experiences}</p>
                </div>
                <div className='mx-6'>
                    <div className='p-4 rounded-md bg-violet-100 text-left '>
                        <h3 className='ml-2 text-lg font-bold'>Job Details</h3>
                        <div className="m-2 divider h-1"></div>
                        <div className='ml-2 flex'>
                            <img src={MoneyImg} alt="" />
                            <p className='ml-1'><b>Salary :</b> {salary} (Per Month)</p>
                        </div>
                        <div className='ml-2 flex'>
                            <img src={TitleImg} alt="" />
                            <p className='ml-1'><b>Job Title :</b> {jobTitle}</p>
                        </div>
                        <h3 className='ml-2 mt-4 text-lg font-bold'>Contact Information</h3>
                        <div className="m-2 divider h-1"></div>
                        <div className='ml-2 flex'>
                            <img src={PhoneImg} alt="" />
                            <p className='ml-1'><b>Phone :</b> {phone}</p>
                        </div>
                        <div className='ml-2 flex'>
                            <img src={EmailImg} alt="" />
                            <p className='ml-1'><b>Email :</b> {email}</p>
                        </div>
                        <div className='ml-2 flex'>
                            <img src={AddressImg} alt="" />
                            <p className='ml-1'><b>Address :</b> {location}</p>
                        </div>
                    </div>
                    <button className='w-full mt-4 text-lg btn border-none bg-gradient-to-r from-violet-500 to-blue-600 hover:from-rose-600 hover:to-orange-600 ' onClick={applyJobHandler}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;