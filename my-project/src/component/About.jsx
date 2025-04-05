import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';

const About = () => {
    const name=useContext(AuthContext);
    console.log(name);
    return (
        <div>
            <h1>This is about page</h1>
        </div>
    );
};

export default About;