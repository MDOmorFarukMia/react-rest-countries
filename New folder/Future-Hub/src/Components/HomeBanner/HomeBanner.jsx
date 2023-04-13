import React from 'react';
import BannerImg from '../../Images/P3OLGJ1.png';


const HomeBanner = () => {
    return (
        <div className='flex flex-col md:flex-row'>

            <div className='p-6 my-auto mx-auto text-left ml-12 w-1/2'>
                <h1 className='text-7xl font-bold w-3/4 mb-6 '>One Step <br />Closer To Your <br /><span className='text-violet-500'>Dream Job</span></h1>
                <p className='w-3/5 mb-6 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a className="text-md btn border-none bg-gradient-to-r from-violet-500 to-blue-500 hover:from-rose-600 hover:to-orange-600" >Get Started</a>
            </div>

            <div>
                <div className=''>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;