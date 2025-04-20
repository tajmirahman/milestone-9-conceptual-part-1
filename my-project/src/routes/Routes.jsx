import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout";
import Home from "../component/Home";
import About from "../component/About";
import Registration from "../component/Registration";
import Login from "../component/Login";
import Profile from "../component/Profile";
import PrivateRoute from "../component/PrivateRoute";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/about',
                element: <PrivateRoute>
                    <About />
                </PrivateRoute>
            },
            {
                path:'/signup',
                element:<Registration />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            }
        ]
    }
]);

export default routes;