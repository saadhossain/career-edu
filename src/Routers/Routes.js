import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses/Courses";
import CourseSingle from "../Components/Courses/CourseSingle";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import { CourseLoader } from "../Loader/CourseLoader";
import PrivateRouter from "./PrivateRouter";
import Profile from "../Components/Profile/Profile"
import ErrorPage from "../Components/ErrorPage/ErrorPage";

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
                element:<PrivateRouter><CourseSingle></CourseSingle></PrivateRouter>
            },
            {path:'/courses', element:<Courses></Courses>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element:<Register></Register>},
            {path:'/profile', element:<PrivateRouter><Profile></Profile></PrivateRouter>}
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
])