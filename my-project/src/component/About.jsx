import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';

const About = () => {
    const {handleGoogleLogin,user}=useContext(AuthContext);
    // console.log(user)

    return (
        <div>
            <h1>This is about page</h1><br />
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <button onClick={handleGoogleLogin} className='btn btn-warning'>google login</button>
        </div>
    );
};

export default About;