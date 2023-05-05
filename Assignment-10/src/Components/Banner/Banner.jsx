import React from 'react';
import './Banner.css'
import img1 from '../../chef.jpg'

const Banner = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 mt-20">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mb-20">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Cook <br />
                        Your Favorite  <span className="text-amber-400">Desh</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">If you get overwhelmed at the mere thought of turning the oven on, we’re here to help. This article gives beginner cooks 10 practical tips for learning to cook at home, along with a few easy recipes to get started. So tie on your apron and get ready to become a master chef!
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" className="px-10 py-2 text-lg font-semibold border rounded-3xl text-white bg-amber-400 hover:bg-white hover:border-amber-400 hover:text-amber-400 shadow-lg shadow-amber-500/50 sm:mb-16 cursor-pointer">Details More</a>

                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-48 sm:my-12 lg:h-96 xl:h-112 2xl:h-128">
                    <div className=''>
                        <img src={img1} alt="" className="object-contain" />
                    </div>
                </div>

            </div>
        </section>


    );
};

export default Banner;