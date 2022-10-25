import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../Context/CourseProvider';
import CoursesShowCase from './CoursesShowCase';

const Courses = () => {
    const courses = useContext(CourseContext)
    return (
        <div className='w-10/12 mx-auto my-5 flex gap-5'>
            <div className='w-3/12 hidden md:block'>
                <div className='sticky top-5 shadow-lg p-5 rounded'>
                    <h1 className='text-2xl font-semibold text-edu'>All Courses</h1>
                    {/* Search by Category Start */}
                    <ul>
                        {
                            courses.map(course => <li className='text-edu font-semibold hover:text-edu2nd mb-3'><Link to={`/courses/${course.id}`}>{course.name}</Link></li>)
                        }
                    </ul>
                    
                    {/* Search by Category End */}

                    <h1 className='text-2xl font-semibold text-edu'>Search Instructor</h1>
                    {/* Search by Instructor Start */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">Schwarzmüller</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">Jonas Schmedtmann</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">Academind</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">365 Careers</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">Sam Pattuzzi</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">Denis Panjuta</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">Lazy Programmer Inc.</span>
                        </label>
                    </div>
                    {/* Search by Instructor End */}

                    <h1 className='text-2xl font-semibold text-edu'>Price Range</h1>
                    {/* Search by Price Start */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">$9.99 - $11.99</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">$12.00 - 14.99</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">$15.00 - $19.99</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text font-semibold">$20.00 - $29.99</span>
                        </label>
                    </div>
                    {/* Search by Price End */}
                    <button className='py-2 rounded bg-edu text-white font-bold w-full'>Filter</button>
                </div>
            </div>
            <div className='w-9/12 grid md:grid-cols-3 gap-5'>
                {
                    courses.map(course => <CoursesShowCase key={course.id} course={course}></CoursesShowCase>)
                }
            </div>
        </div>
    );
};

export default Courses;