import React, { useContext } from 'react';
import homeBanner from '../../assests/career-eud-home-banner.jpg'
import { CourseContext } from '../../Context/CourseProvider';
import CoursesShowCase from '../Courses/CoursesShowCase';
import RecentCourses from './RecentCourses';
const Home = () => {
    const courses = useContext(CourseContext);
    const featuredCourse = courses.slice(4,8)
    return (
        <div>
            {/* Home Banner */}
            <img src={homeBanner} alt='Home Banner' className='max-h-screen w-full'/>
            {/* Featured Courses */}
            <h2 className='text-edu text-2xl md:text-4xl font-bold my-2 md:my-5 text-center'>Featured Courses</h2>
            <div className='w-11/12 md:w-10/12 mx-auto grid md:grid-cols-4 gap-5 my-5'>
                {
                   featuredCourse.map(course=> <CoursesShowCase key={course.id} course={course}></CoursesShowCase>) 
                }
            </div>
            <RecentCourses></RecentCourses>
        </div>
    );
};

export default Home;