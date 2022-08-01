import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        localStorage.removeItem('accessToken')
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>

        <li>{
            user && <Link to='dashboard'>Dashboard</Link>
        }</li>

        <li>
            {user
                ?
                <button onClick={logout} className="btn btn-ghost">Log Out</button>
                :
                <Link to='/login'>Login</Link>
            }
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="text-xl normal-case btn btn-ghost">Doctors Portal</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;