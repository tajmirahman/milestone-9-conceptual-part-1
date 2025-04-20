import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './MainLayout';

const Navber = () => {

    const {handleLogOut}=useContext(AuthContext)
    return (
        <div className='text-2xl space-x-4 text-center mt-10'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <button onClick={handleLogOut} className='btn btn-warning'>Logout</button>
        </div>
    );
};

export default Navber;