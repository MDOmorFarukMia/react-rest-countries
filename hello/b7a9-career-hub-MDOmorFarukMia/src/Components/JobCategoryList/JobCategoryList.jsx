import React from 'react';




const JobCategoryList = ({category}) => {
    console.log(category);
    return (
        <div className='mt-24'>
            <div>
                <h2 className='text-4xl font-bold mt-6 '>Job Category List</h2>
                <p className='mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='mt-12 mb-6 grid grid-cols-2 md:grid-cols-4 gap-4  justify-between'>
                    {
                        category?.map((item)=>  <div key={item.id} className=''>
                        <img className='mx-auto' src={item.categoryLogo} alt={item.categoryName} />
                        <h4 className='mt-3 text-lg font-bold'>{item.categoryName}</h4>
                        <p className='text-sm text-gray-600'>{item.availableJob} Jobs Available</p>
                    </div>)
                    }
                    {/* <div className=''>
                        <img className='mx-auto' src={AccountImg} alt="" />
                        <h4 className='mt-3 text-lg font-bold'>Account & Finance</h4>
                        <p className='text-sm text-gray-600'>300 Jobs Available</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={CreativeImg} alt="" />
                        <h4 className='mt-3 text-lg font-bold'>Creative Design</h4>
                        <p className='text-sm text-gray-600'>100+ Jobs Available</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={MarketingImg} alt="" />
                        <h4 className='mt-3 text-lg font-bold'>Marketing & Sales</h4>
                        <p className='text-sm text-gray-600'>150 Jobs Available</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={EngineeringImg} alt="" />
                        <h4 className='mt-3 text-lg font-bold'>Engineering Job</h4>
                        <p className='text-sm text-gray-600'>224 Jobs Available</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;