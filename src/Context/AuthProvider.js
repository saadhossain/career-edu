import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    //User registration
    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Update Profile or Display Name
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:photoURL,
        })
    }
    //Email Verification
    const emailVerify = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    //Send All Data acroos the site
    const userInfo = { userRegister, updateUserProfile, emailVerify };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;