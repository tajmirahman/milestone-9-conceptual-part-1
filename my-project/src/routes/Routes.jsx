import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout";
import Home from "../component/Home";
import About from "../component/About";
import Registration from "../component/Registration";
import Login from "../component/Login";

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
                element:<About />
            },
            {
                path:'/registration',
                element:<Registration />
            },
            {
                path:'/login',
                element: <Login />
            }
        ]
    }
]);

export default routes;