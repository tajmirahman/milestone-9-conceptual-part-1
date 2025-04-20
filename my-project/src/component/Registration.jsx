import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';

const Registration = () => {

    const { handleSignUp } = useContext(AuthContext);

    const handleForm = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordCon = e.target.passwordCon.value;

        if (password.length < 6) {
            alert('password should be atleast 6 character!');
            return;
        }

        if (password != passwordCon){
            alert('password does not match');
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=(?:.*\d){2,})(?=.*[^A-Za-z0-9]).+$/;

        if(!regex.test(password)){
            alert('valid not password');
            return;
        }

            handleSignUp(email, password);



    }

    return (

        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleForm} className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="text" name='password' className="input" placeholder="Password" />

                        <label className="fieldset-label">Password Confirm</label>
                        <input type="text" name='passwordCon' className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Registration;