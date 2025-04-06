
import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';


const Home = () => {

    const {handleGoogleLogin,handleGithubLogin,handleLogOut}=useContext(AuthContext);
   

    
 
    return (
        <div className='p-10 space-x-2'>
            
            <button onClick={handleGoogleLogin} className='btn btn-warning text-center'>Google Login</button>
            <button onClick={handleGithubLogin} className='btn btn-warning text-center'>Google Login</button>
            <button onClick={handleLogOut} className='btn btn-warning'>Log Out</button>

        </div>
    );
};

export default Home;