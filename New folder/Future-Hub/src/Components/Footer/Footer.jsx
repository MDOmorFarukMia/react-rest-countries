import React from 'react';
import FacebookImg from '../../Images/facebook-01.png';
import TwitterImg from '../../Images/twitter-01.png';
import InstagramImg from '../../Images/instagram-01.png';

const Footer = () => {
    return (
        <div className='bg-black text-gray-400'>
            <div className='flex pt-20 bg-black text-gray-400'>
                <div className='m-6 text-left w-1/4'>
                    <h3 className='text-2xl text-white font-bold'>CareerHub</h3>
                    <p className='w-3/4'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex'>
                        <img className='w-8 ml-2' src={FacebookImg} alt="" />
                        <img className='w-8 ml-2' src={TwitterImg} alt="" />
                        <img className='w-8 ml-2' src={InstagramImg} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-content-between'>

                    <div className='m-6 text-left'>
                        <h4 className='text-lg text-white font-bold'>Company</h4>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                    <div className='m-6 text-left'>
                        <h4 className='text-lg text-white font-bold'>Product</h4>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                    <div className='m-6 text-left'>
                        <h4 className='text-lg text-white font-bold'>Support</h4>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div className='m-6 text-left' >
                        <h4 className='text-lg text-white font-bold'>Company</h4>
                        <p>524 Broadway , NYC</p>
                        <p>+1 777 - 978 - 5570</p>

                    </div>
                </div>

            </div>
            <div className="m-2 divider h-1"></div>
            <div className='grid grid-cols-2 justify-content-around bg-slate-800'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;