import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='text-center'>
                    <div class="text-8xl md:text-9xl font-extrabold my-6 text-edu">
                        <h1>Oops!</h1>
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-edu2nd my-3 md:my-10'>404 - Page not found</h2>
                    <p className='text-md font-semibold mb-5'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to='/' className='bg-edu py-2 px-3 rounded text-white'>Go To Home</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;