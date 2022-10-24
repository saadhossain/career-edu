import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseSingle = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div>
            <h1>Course Single</h1>
        </div>
    );
};

export default CourseSingle;