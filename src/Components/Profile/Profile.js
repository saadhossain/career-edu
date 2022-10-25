import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='w-6/12 mx-auto p-6 mt-10 rounded-lg bg-eduhf'>
            <h1 className='text-2xl font-semibold text-center text-white my-3'>Profile</h1>
            <div className='border-t border-white'>
                <div className='flex items-center gap-6 my-2 text-white'>
                    <img src={user && user.photoURL ?  user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt="Profile" className='w-32 rounded'/>
                    <div>
                        <h3 className='text-xl font-semibold'>{user?.displayName ? user.displayName : 'Name was not Set'}</h3>
                        <h3 className='text-lg'>Email : {user?.email}</h3>
                        <h3 className='text-lg'>Status: {user?.emailVerified ? 'Verified' : 'Not Verified'}</h3>
                        <h3 className='text-lg'>User ID : {user.uid}</h3>
                        <button className='bg-edu py-2 px-3 rounded font-semibold'>Update Profile</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Profile;