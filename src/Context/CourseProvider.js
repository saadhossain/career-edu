import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

export const CourseContext = createContext()
const CourseProvider = ({ children }) => {
    const courses = useLoaderData()
    return (
        <CourseContext.Provider value={courses}>
            {children}
        </CourseContext.Provider>
    );
};

export default CourseProvider;