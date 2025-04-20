import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';

const Login = () => {

   const {handleSignIn}=useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;
        handleSignIn(email,password)
        
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm text-center">
                    <form onSubmit={handleLogin} className='bg-gray-300 p-2 space-y-3 '>
                    <label >Email</label>
                        <input type="email" name='email' /><br />
                        <label>Password</label>
                        <input type="password" name='password' /><br />
                        <input className='btn btn-ghost' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;