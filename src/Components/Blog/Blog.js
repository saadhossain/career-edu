import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogShowCase from './BlogShowCase';

const Blog = () => {
    const blogs = useLoaderData()
    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-5'>
            <h1 className='text-2xl font-bold text-center text-edu'>Latest Articles</h1>
            <div className='grid md:grid-cols-2 gap-5 my-5'>
                {
                    blogs.map(blog => <BlogShowCase key={blog.id} blog={blog}></BlogShowCase>)
                }
            </div>
        </div>
    );
};

export default Blog;