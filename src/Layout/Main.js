import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import CourseProvider from '../Context/CourseProvider';
const Main = () => {
    return (
        <div>
            <CourseProvider>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </CourseProvider>
        </div>
    );
};

export default Main;