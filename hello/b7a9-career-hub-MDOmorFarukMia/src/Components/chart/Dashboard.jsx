import React from 'react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  ComposedChart, Bar, Area } from 'recharts';



const Dashboard = () => {

    const marksArray = [
        // {
        //   id: 0,
        //   name: "A0",
        //   marks: 0,
        //   av: 0
         
        // },
        {
          id: 1,
          name: "A1",
          marks: 60,
          av: 60
         
        },
        {
          id: 2,
          name: "A2",
          marks: 60,
          av: 60
         
        },
        {
          id: 3,
          name: "A3",
          marks: 60,
          av: 60
         
        },
        {
          id: 4,
          name: "A4",
          marks: 60,
          av: 60
          
        },
        {
          id: 5,
          name: "A5",
          marks: 57,
          av: 59.40
         
        },
        {
          id: 6,
          name: "A6",
          marks: 60,
          av: 59.50

         
        },
        {
          id: 7,
          name: "A7",
          marks: 60,
          av: 59.57

         
        },
        {
          id: 8,
          name: "A8",
          marks: 60,
          av: 59.63
        
        }
      ];
      

    return (
        <div className='mt-20 mb-11 mx-auto w-6/12'>
              <ComposedChart
                width={1000}
                height={600}
                data={marksArray}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" stroke="#261cdf" scale="band"></XAxis>
                {/* <XAxis dataKey="av" stroke="#df8b1c" scale="band"></XAxis> */}
                <Area type="monotone" dataKey="av" fill="#8884d8" stroke="#8884d8" />
                {/* <XAxis dataKey="name" /> */}
                <YAxis></YAxis>
                <Tooltip />
                <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Dashboard;