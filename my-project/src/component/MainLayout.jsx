import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';

export const authContext=createContext(null);

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;