import React from 'react';
import { Link } from 'react-router-dom';
import callToAction from '../../assests/career-edu-calltoaction.jpg';

const CallToAction = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5 lg:my-16 lg:flex items-center justify-between'>
            <div className='w-full lg:w-2/4'>
                <img src={callToAction} alt='Call To Action' className='rounded-xl' />
            </div>
            <div className='w-full lg:w-2/4 lg:text-end'>
                <h2 className='text-3xl mt-3 lg:mt-0 lg:text-5xl font-bold text-edu'>Are You Ready To Transform Your Life?</h2>
                <Link to='/courses'>
                    <button className='bg-edu py-2 px-5 rounded mt-5 text-white font-semibold duration-300 ease-in-out hover:bg-eduhover'>Get Enrolled</button>
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;