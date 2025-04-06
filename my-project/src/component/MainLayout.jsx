import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

const MainLayout = () => {

    const [user,setUser]=useState(null);

    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();


    const handleGoogleLogin=()=>{

        signInWithPopup(auth, googleProvider)
        .then(res=>{
            setUser(res)
        })
        .catch(err=>{
            setUser(err);
        })
    }

    const handleGithubLogin=()=>{
        signInWithPopup(auth, githubProvider)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    useEffect(()=>{
        console.log()
    },[user])

    const authInfo={
        handleGoogleLogin,
        handleGithubLogin
    }




    return (
        <AuthContext.Provider value={authInfo}>
            <Outlet></Outlet>
        </AuthContext.Provider>
    );
};

export default MainLayout;