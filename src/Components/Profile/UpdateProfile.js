import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const UpdateProfile = () => {
    const {user, updateUserProfile} = useContext(AuthContext)
    console.log(user);
    //Update User profile
    const handleUpdateProfile =(e) => {
        e.preventDefault();
        const form = e.target;
        const newDisplayName = form.newName.value;
        const newPhotoURL = form.photoURL.value;
        updateUserProfile(newDisplayName, newPhotoURL)
        .then((res) => {
            window.location.reload()
            toast.success('Your Profile has been updated')
        })
        .catch(error => console.error(error));
    }
    return (
        <div>
            <input type="checkbox" id="updateProfileModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-eduhf text-white">
                    <label htmlFor="updateProfileModal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-edu text-white hover:bg-edu">✕</label>
                    <div className="flex flex-col max-w-md p-2 rounded-md">
                        <div className="mb-2 text-center">
                            <h1 className="text-lg md:text-2xl font-bold">Update Profile</h1>
                        </div>
                        <form onSubmit={handleUpdateProfile} className="space-y-4 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-2">
                                <div className="space-y-1 text-md">
                                    <input type="email" name="email" id="email" defaultValue={user.email} className="w-full px-4 py-3 rounded-md text-eduhf font-semibold" disabled/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="space-y-1 text-md">
                                    <label htmlFor="newName" className="block">Enter Your Name</label>
                                    <input type="text" name="newName" id="newName" defaultValue={user.displayName} className="w-full px-4 py-3 rounded-md text-eduhf font-semibold" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="space-y-1 text-md">
                                    <label htmlFor="photoURL" className="block">New Profile Image</label>
                                    <input type="text" name="photoURL" id="photoURL" defaultValue={user.photoURL} className="w-full px-4 py-3 rounded-md text-eduhf font-semibold" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-edu">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;