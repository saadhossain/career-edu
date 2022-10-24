import React from 'react';
import {BsFillPhoneFill} from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-eduhf text-white py-5 mt-10'>
            <div className='md:w-10/12 mx-auto'>
                <section className='grid md:grid-cols-4 justify-between gap-5 md:gap-10 ml-10 md:ml-0'>
                    {/* Compnay information */}
                    <div>
                        <h4 className='text-xl font-bold'>Company</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>About</li>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>Affiliate</li>
                            <li>Partnership</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Comunity</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>Team Plans</li>
                            <li>Refer a Friend</li>
                            <li>Limited Membership</li>
                            <li>Schoolership</li>
                            <li>Free Classes</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Importants</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>Become a Teacher</li>
                            <li>Teacher Help Center</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Student Care Team</li>
                        </ul>
                    </div>
                    {/* Contact section */}
                    <div>
                        <h1 className='text-xl font-bold'>Have a Question?</h1>
                        <div className='my-5'>
                            <ul>
                                <li className='flex items-center gap-1 mb-2'><MdLocationOn className='w-10 h-10' /><Link>203 Fake St. Mountain View, San Francisco, California, USA</Link></li>
                                <li className='flex items-center gap-1 mb-2'><BsFillPhoneFill /><Link>+2 392 3929 210</Link></li>
                                <li className='flex items-center gap-1 mb-2'><FaEnvelope /><Link>care@careeredu.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='border-t border-edu mt-5 text-center'>
                    <p className='py-2'>&copy; 2023, CareerEdu Inc.</p>
                </section>
            </div>
        </div>
    );
};

export default Footer;