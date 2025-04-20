import React from 'react';

const Login = () => {

    

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm text-center">
                    <form onSubmit={handleLogin} className='bg-gray-300 p-2 space-y-3 '>
                    <label >Email</label>
                        <input type="email" name='email' /><br />
                        <label>Password</label>
                        <input type="password" name='password' /><br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;