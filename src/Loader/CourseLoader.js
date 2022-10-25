export const CourseLoader = async () => {
    const courseData = await fetch('https://career-edu-server.vercel.app/courses/');
    const courses = await courseData.json()
    return courses
}