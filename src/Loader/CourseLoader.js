export const CourseLoader = async () => {
    const courseData = await fetch('http://localhost:5000/courses/');
    const courses = await courseData.json()
    return courses
}