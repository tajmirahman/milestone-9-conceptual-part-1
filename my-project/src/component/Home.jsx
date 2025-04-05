import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.init';

const Home = () => {

    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

    const handleGoogleLogin=()=>{

        signInWithPopup(auth, googleProvider)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
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

    return (
        <div className='p-10 space-x-2'>
            
            <button onClick={handleGoogleLogin} className='btn btn-warning text-center'>Google Login</button>
            <button onClick={handleGithubLogin} className='btn btn-warning text-center'>Google Login</button>
        </div>
    );
};

export default Home;