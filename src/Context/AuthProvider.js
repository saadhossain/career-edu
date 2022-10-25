import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    //Set Loading
    const [loading, setLoading] = useState(true)
    //User registration
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update Profile or Display Name
    const updateUserProfile = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }
    //Email Verification
    const emailVerify = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    //User Login using email and password
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //User Login with Google
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //User Login with Github
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubprovider)
    }
    //Logout Functionality
    const logOut = () => {
        return signOut(auth)
    }
    //Get Logged in user from auth state
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser =>{
            setUser(currentUser)
            setLoading(false)
        }))
        return () => unSubscribe()
    },[auth])

    //Send All Data acroos the site
    const userInfo = {user, userRegister, updateUserProfile, emailVerify, userLogin, googleLogin, githubLogin, loading , logOut};
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;