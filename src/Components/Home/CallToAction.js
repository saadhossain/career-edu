import React from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';
import callToAction from '../../assests/career-edu-calltoaction.jpg';
import Slide from 'react-reveal/Slide'

const CallToAction = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5 lg:my-16 lg:flex items-center justify-between'>
            <div className='w-full lg:w-2/4'>
                <Flip left>
                    <img src={callToAction} alt='Call To Action' className='rounded-xl' />
                </Flip>
            </div>
            <div className='w-full lg:w-2/4 lg:text-end'>
                <Slide right>
                    <h2 className='text-3xl mt-3 lg:mt-0 lg:text-5xl font-bold text-edu'>Are You Ready To Transform Your Life?</h2>
                </Slide>
                <Slide bottom>
                    <Link to='/courses'>
                        <button className='bg-edu py-2 px-5 rounded mt-5 text-white font-semibold duration-300 ease-in-out hover:bg-eduhover'>Get Enrolled</button>
                    </Link>
                </Slide>
            </div>
        </div>
    );
};

export default CallToAction;