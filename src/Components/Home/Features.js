import React from 'react';
import instructor from '../../assests/expert.png';
import quality from '../../assests/quality.png';
import access from '../../assests/access.png';
import support from '../../assests/support.png';

const Features = () => {
    return (
        <div className='bg-[#d8e4ff] py-10'>
            <div className='w-11/12 lg:w-11/12 mx-auto lg:flex'>
                <div className='w-full lg:w-2/5'>
                    <h2 className='text-4xl font-bold text-edu'>Why Choose Us?</h2>
                    <p className='font-semibold'>
                        Discover the difference of learning with us! At CareerEdu, we believe in providing a comprehensive education experience that combines expert instruction, interactive learning materials, and personalized support. Our courses are designed by industry leaders and are constantly updated to keep pace with the latest trends and advancements. With a focus on student success, our dedicated team is here to assist you every step of the way!
                    </p>
                </div>
                <div className='w-full lg:w-3/5 mt-5 lg:mt-0'>
                    <div className='lg:flex mb-5'>
                        <div className='w-full lg:w-2/4 flex gap'>
                            <img src={quality} alt='Quality' className='w-20 h-20' />
                            <div>
                                <h3 className='text-2xl font-semibold text-edu'>High Quality Courses</h3>
                                <p>Experience excellence in education with our high quality courses. Learn from industry leaders and master new skills with our engaging and interactive curriculum.</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-2/4 flex gap-2'>
                            <img src={instructor} alt='Quality' className='w-20 h-20' />
                            <div>
                                <h3 className='text-2xl font-semibold text-edu'>Expert Instructors</h3>
                                <p>Get the guidance you need from our team of expert tutors. Benefit from their wealth of knowledge and expertise to reach your full potential.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='w-full lg:w-2/4 flex gap-2'>
                            <img src={access} alt='Quality' className='w-20 h-20' />
                            <div>
                                <h3 className='text-2xl font-semibold text-edu'>Lifetime Access</h3>
                                <p>Take control of your learning with lifetime access to our courses. Study at your own pace and revisit material whenever you need to with 24/7 access.</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-2/4 flex gap-2'>
                            <img src={support} alt='Quality' className='w-20 h-20' />
                            <div>
                                <h3 className='text-2xl font-semibold text-edu'>Dedicated Support</h3>
                                <p>Achieve your goals with our dedicated technical support team. Available 24/7, they are here to help you overcome any technical difficulties.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;