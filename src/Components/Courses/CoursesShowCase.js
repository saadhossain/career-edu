import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const CoursesShowCase = ({ course }) => {
    const {id, image, name, price, tutor, rating } = course;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} className='w-full rounded-t' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title text-edu">Price: ${price}</h2>
                    <p>Tutor: {tutor}</p>
                    <span className='flex justify-between'>
                        Ratings: <StarIcon className='text-yellow-400 w-5'></StarIcon>
                        <p> {rating.rate}</p>
                        <p>Total:({rating.total})</p>
                    </span>
                    <div className="card-actions justify-center my-5">
                        <Link to={`/courses/${id}`}>
                            <button className="bg-edu py-2 px-3 rounded text-white font-bold">Enroll Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesShowCase;