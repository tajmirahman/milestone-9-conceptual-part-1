import React from 'react';

const Home = () => {

    const handleGoogleLogin=()=>{
        
    }

    return (
        <div>
            <h1 className='text-3xl text-center'>I am Home page</h1>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Home;