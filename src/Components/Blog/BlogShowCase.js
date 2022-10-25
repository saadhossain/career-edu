import React from 'react';

const BlogShowCase = ({ blog }) => {
    const {title, description, image } = blog;
    return (
        <article className='bg-slate-200 rounded relative'>
            <img src={image} alt={title} className='w-full h-[311px] rounded-t'/>
            <div className='p-5'>
                <h2 className='text-xl font-bold text-edu'>{title}</h2>
                <p className='mb-12'>{description}</p>
                <button className='bg-edu py-2 px-3 rounded text-white font-semibold absolute bottom-5 '>Read More</button>
            </div>
        </article>
    );
};

export default BlogShowCase;