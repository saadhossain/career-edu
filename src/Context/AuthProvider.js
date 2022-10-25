import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    //Google auth provider for login
    const googleProvider = new GoogleAuthProvider()
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
    //User Login with Google
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    //Send All Data acroos the site
    const userInfo = { userRegister, updateUserProfile, emailVerify, userLogin, googleLogin};
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;