import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';
import { Navigate } from 'react-router-dom';

const Profile = () => {

    const {user}=useContext(AuthContext);
    // console.log(user);

    // if(!user){
    //     return <Navigate to={'/login'}></Navigate>
    // }


    return (
        <div>
            <h1>This is Profile Page</h1>
            <p><span className='text-red-400'>{user?.displayName}</span><br />
            <span className='text-red-400'>{user?.email}</span>
             u r noted in our mind</p>


        </div>
    );
};

export default Profile;