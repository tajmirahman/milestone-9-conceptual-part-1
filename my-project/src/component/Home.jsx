import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.init';

const Home = () => {

    const handleGoogleLogin=()=>{
        const googleProvider= new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h1 className='text-3xl text-center'>I am Home page</h1>
            <button onClick={handleGoogleLogin} className='btn btn-warning text-center'>Google Login</button>
        </div>
    );
};

export default Home;