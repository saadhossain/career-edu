import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import homeBanner from '../../assests/career-eud-home-banner.jpg';
import { CourseContext } from '../../Context/CourseProvider';
import CoursesShowCase from '../Courses/CoursesShowCase';
import CallToAction from './CallToAction';
import Features from './Features';

const Home = () => {
    const courses = useContext(CourseContext);
    const featuredCourse = courses.slice(4, 8)
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            {/* Home Banner */}
            <img src={homeBanner} alt='Home Banner' className='max-h-screen w-full' />
            {/* Featured Courses */}
            <div className='bg-[#d8e4ff] py-5'>
                <h2 className='text-edu text-2xl md:text-4xl font-bold text-center mb-5'>Featured Courses</h2>
                <div className='w-11/12 md:w-10/12 mx-auto'>
                    <Slider {...settings}>
                        {
                            featuredCourse.map(course => <CoursesShowCase key={course.id} course={course}></CoursesShowCase>)
                        }
                    </Slider>
                </div>
            </div>
            {/* Call To Action Section */}
            <CallToAction />
            {/* Features Section */}
            <Features/>
        </div>
    );
};

export default Home;