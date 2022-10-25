import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-edu"></div>
        </div>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivateRouter;