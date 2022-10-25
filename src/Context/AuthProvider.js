import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    //Google auth provider for login/registration
    const googleProvider = new GoogleAuthProvider()
    //GitHub auth provider for login/registration
    const githubprovider = new GithubAuthProvider()

    //Set user to the State
    const [user, setUser] = useState()
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
    //User Login with Github
    const githubLogin = () =>{
        return signInWithPopup(auth, githubprovider)
    }
    //Send All Data acroos the site
    const userInfo = {user, userRegister, updateUserProfile, emailVerify, userLogin, googleLogin, githubLogin};
    //Get Logged in user from auth state
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser =>{
            setUser(currentUser)
        }))
        return () => unSubscribe()
    },[auth])
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;