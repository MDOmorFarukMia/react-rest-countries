import React from 'react';
import Dashboard from '../chart/Dashboard';

const Statistics = () => {
    return (
        <div>
            <div className='mb-12'>
                <h2 className=' p-24 bg-violet-100 text-violet-500 text-4xl font-bold'>Assignment Statistics</h2>
            </div>
           <Dashboard />
        </div>
    );
};

export default Statistics;