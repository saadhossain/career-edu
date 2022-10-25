import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CheckOut from "../Components/CheckOut/CheckOut";
import Courses from "../Components/Courses/Courses";
import CourseSingle from "../Components/Courses/CourseSingle";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import { CourseLoader } from "../Loader/CourseLoader";
import PrivateRouter from "./PrivateRouter";

export const Routes = createBrowserRouter([
    {
        path: '/',
        loader: CourseLoader,
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://career-edu-server.vercel.app/courses/${params.id}`),
                element: <CourseSingle></CourseSingle>
            },
            { path: '/courses', element: <Courses></Courses> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/profile', element: <PrivateRouter><Profile></Profile></PrivateRouter> },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://career-edu-server.vercel.app/courses/${params.id}`),
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>
            },
            { 
                path: '/blogs', 
                loader:()=> fetch('https://career-edu-server.vercel.app/blogs'),
                element: <Blog></Blog> 
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])