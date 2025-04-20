import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user}=useContext(AuthContext);

        console.log(user)

        if(!user){
            return <Navigate to={'/login'}></Navigate>
        }

    return (

        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;