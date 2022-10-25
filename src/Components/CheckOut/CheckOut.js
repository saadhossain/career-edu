import { ClockIcon, DocumentCheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    const { id, name, image, price, tutor, rating, description, feature } = course;
    return (
        <div className='w-11/12 md:w-8/12 mx-auto my-10'>
            <div className='p-5 rounded md:flex gap-10'>
                <img src={image} alt={name} className='rounded my-3' />
                <div>
                    <h1 className='text-edu text-xl md:text-3xl font-bold'>{name}</h1>
                    <p className='text-md md:text-lg font-semibold'>{description}</p>
                    <h3 className='text-2xl font-bold text-edu'>${price}</h3>
                    <span className='text-red-500 flex items-center'><ClockIcon className='h-5 w-5'></ClockIcon><p><strong>3 hours</strong> left at this price</p></span>
                </div>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <button className='bg-edu text-white px-2'>Best Seller</button>
                <div className='flex items-center gap-2 font-semibold'>
                    <span className='flex text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                    </span>
                    <p>{rating.rate}</p>
                    <p>({rating.total} Students)</p>
                </div>
            </div>
            <p className='text-edu2nd font-semibold'>Created By: {tutor}</p>
            <ul className='text-edu2nd font-semibold my-5'>
                <span className='flex items-start gap-2'>
                    <DocumentCheckIcon className='h-5 w-5'></DocumentCheckIcon><li className='mb-2'>{feature.one}</li>
                </span>
                <span className='flex items-start gap-2'>
                    <DocumentCheckIcon className='h-5 w-5'></DocumentCheckIcon><li className='mb-2'>{feature.two}</li>
                </span>
                <span className='flex items-start gap-2'>
                    <DocumentCheckIcon className='h-5 w-5'></DocumentCheckIcon><li className='mb-2'>{feature.three}</li>
                </span>
            </ul>
            <Link to={`/checkout/${id}`}><button className='py-2 my-4 rounded bg-edu text-white font-bold w-full'>Complete Enrollment</button></Link>
        </div>
    );
};

export default CheckOut;