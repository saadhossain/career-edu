import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import UpdateProfile from './UpdateProfile';

const Profile = () => {
    const {user, logOut } = useContext(AuthContext)
    //User logout functionality
    const handleLogOut = () => {
        logOut()
        .then(()=>{
            toast.success('You are Logged Out')
        })
    }
    return (
        <div className='w-11/12 md:w-6/12 mx-auto p-6 my-10 rounded-lg bg-eduhf'>
            <h1 className='text-2xl font-semibold text-center text-white my-3'>Profile</h1>
            <div className='border-t border-white'>
                <div className='md:flex items-center gap-6 my-2 text-white'>
                    <img src={user && user.photoURL ?  user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt="Profile" className='w-32 rounded'/>
                    <div>
                        <h3 className='text-xl font-semibold'>{user?.displayName ? user.displayName : 'Name was not Set'}</h3>
                        <h3 className='text-lg'>Email : {user?.email}</h3>
                        <h3 className='text-lg'>Status: {user?.emailVerified ? 'Verified' : 'Not Verified'}</h3>
                        <h3 className='text-lg'>User ID : {user.uid}</h3>
                        <label htmlFor='updateProfileModal' className='bg-edu py-2 px-3 rounded font-semibold cursor-pointer'>Update Profile</label>
                        <button onClick={handleLogOut} className='bg-[#F2806D] py-2 px-3 rounded font-semibold mx-5'>Log Out</button>
                    </div>
                </div>
            </div>
            <UpdateProfile></UpdateProfile>
        </div>


    );
};

export default Profile;