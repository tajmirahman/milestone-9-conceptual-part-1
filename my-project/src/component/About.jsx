import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';

const About = () => {
    const {handleGoogleLogin}=useContext(AuthContext);

    return (
        <div>
            <h1>This is about page</h1>
            <button onClick={handleGoogleLogin} className='btn btn-warning'>google login</button>
        </div>
    );
};

export default About;