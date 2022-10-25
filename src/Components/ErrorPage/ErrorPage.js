import React from 'react';
import { Link } from 'react-router-dom';
import './EorroPage.css'
const ErrorPage = () => {
    return (
        <div>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404 my-6">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to='/'>Go To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;