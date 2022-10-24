import { createBrowserRouter } from "react-router-dom";
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
        ]
    }
])