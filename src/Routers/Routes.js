import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses/Courses";
import CourseSingle from "../Components/Courses/CourseSingle";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import { CourseLoader } from "../Loader/CourseLoader";

export const Routes = createBrowserRouter([
    {
        path:'/',
        loader:CourseLoader,
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>},
            {
                path:'/courses/:id', 
                loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
                element:<CourseSingle></CourseSingle>
            },
            {path:'/courses', element:<Courses></Courses>}
        ]
    }
])