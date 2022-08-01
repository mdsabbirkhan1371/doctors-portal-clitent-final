
import { async } from '@firebase/util';

import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import useToken from '../../hooks/useToken';

const Login = () => {

    // for reset password 



    // sign in google 
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);



    // from react form hook 
    const { register, formState: { errors }, handleSubmit } = useForm();

    // sign in with email and password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorPassword] = useSendPasswordResetEmail(
        auth
    );

    // for requre auth 
    const navigate = useNavigate()
    const location = useLocation();
    const [token] = useToken(user || gUser)
    const [email, setEmail] = useState('')
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let signInError;

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    // from react hooks form 
    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email')
        }
        else {
            toast('Please Enter Your Email')
        }

    }


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="shadow-xl card w-96 bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email input field */}

                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                type="email"
                                placeholder="email"
                                className="w-full max-w-xs input input-bordered email-input"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email address'
                                    }
                                })}

                            />

                            {/* showing error  */}

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                            </label>

                        </div>


                        {/* password input  */}


                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full max-w-xs input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}

                            />

                            {/* showing error  */}

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                            </label>

                        </div>


                        {/* login submit field  */}


                        <p className='mb-5 cursor-pointer' onClick={resetPassword}><small>Forget Password?</small></p>
                        {signInError}

                        <input type="submit" value="Login" className="w-full max-w-xs text-white input input-bordered bg-accent" />
                        <p><small>New to doctors portal?<Link className='ml-2 text-secondary' to="/signup">Create new account</Link></small></p>

                    </form>
                    {/* <ToastContainer /> */}

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline w-100"
                    >Continue With Google</button>


                </div>
            </div>
        </div>
    );
};

export default Login;