import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home1 = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home1;