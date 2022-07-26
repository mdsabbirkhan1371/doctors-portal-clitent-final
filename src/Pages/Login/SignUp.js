import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    // sign in google 
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // from react form hook 
    const { register, formState: { errors }, handleSubmit } = useForm();

    // sign in with email and password 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // update profile 
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const navigate = useNavigate()

    let signInError;

    if (error || gError || updatingError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updatingError?.message}</small></p>
    }
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (gUser || user) {
        console.log(user, gUser)
    }
    // from react hooks form 
    const onSubmit = async (data) => {
        console.log(data);
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        console.log("update done")
        navigate('/appointment')

    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* name input field  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered w-full max-w-xs"

                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                    pattern: {

                                        message: 'Provide a valid email address'
                                    }
                                })}

                            />

                            {/* showing error  */}

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                            </label>

                        </div>

                        {/* email input field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered w-full max-w-xs"

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


                        {signInError}

                        <input type="submit" value="Sign Up" className="input input-bordered w-full max-w-xs bg-accent text-white" />
                        <p><small>Already have an account?<Link className='ml-2 text-secondary' to="/login">login please here</Link></small></p>

                    </form>

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

export default SignUp;