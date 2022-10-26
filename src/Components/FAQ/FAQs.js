import React from 'react';
import {
    Accordion,
    AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from 'react-router-dom';
const RecentCourses = () => {
    return (
        <div className='w-11/12 md:w-8/12 mx-auto my-10'>
            <h1 className='text-4xl font-bold text-edu text-center mb-5'>Frequently Asked Questions</h1>
            <Accordion className='bg-eduhf text-white'>
                <AccordionItem>
                    <AccordionItemHeading className='text-xl font-semibold'>
                        <AccordionItemButton>
                            How Can I reset My Password?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            No Worries! If you Forget your password, then you can easily reset your password.
                            Follow these Stpes.
                        </p>
                        <ol className='list-decimal mx-5'>
                            <li>Go to <Link to='/login' className='text-edu font-bold'>Login</Link> Page</li>
                            <li>At the Bottom of the Password Field you will See a Password Reset Link</li>
                            <li>Click on the Password Reset Link, You will See a Modal</li>
                            <li>Now Enter Your Registered Email and Click on Reset Button</li>
                            <li>YAY! You are done, Now you will Receive an Email Containing Password Reset Link</li>
                            <li>Click on Password Reset Link from your Email and Set New Password</li>
                        </ol>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading className='text-xl font-semibold'>
                        <AccordionItemButton>
                            Can I update My Name or Profile Picture?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes, You can Update Your Name and Profile Picture from Profile Page. Follow the Steps Below
                        </p>
                        <ol className='list-decimal mx-5'>
                            <li>Go to <Link to='/profile' className='text-edu font-bold'>Profile</Link> Page by Clicking on Your Picture at Navbar</li>
                            <li>Now You will see an Update Button in the Profile Page</li>
                            <li>Click on the Update Button, It will open a Modal with necessary fields</li>
                            <li>Now Enter Your Name and Profile Picture URL which you want to change and hit the update button.</li>
                            <li>YAY! You are done, Now you can see Updated information on your profile</li>
                        </ol>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading className='text-xl font-semibold'>
                        <AccordionItemButton>
                            Is there any way to genarate a PDF file of the Course?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes, You can Genarate a PDF file for each and Every course. Just got to Courses and Click on the <span className='text-edu font-bold'>Enroll Now</span>, You will see the details of the course that you have clicked.<br/>
                            Now you will see two Action Button, One is <span className='text-edu font-bold'>Download PDF</span>, By clicking on the Button, System will genarate a PDF file and it will be download to your Computer/Mobile.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default RecentCourses;