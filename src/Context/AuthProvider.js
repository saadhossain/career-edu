import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    //User registration
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update Profile or Display Name
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }
    //Email Verification
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }
    //User Login using email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Send All Data acroos the site
    const userInfo = { userRegister, updateUserProfile, emailVerify, userLogin };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;