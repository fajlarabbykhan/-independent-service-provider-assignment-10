import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import aita from '../../Images/Aita-Law-logo-336x50.png'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user?.displayName)
    return (
        <nav className="navbar navbar-expand-lg   navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd", fontSize: "18px", fontWeight: "bold" }}>
            <div className="container">
                <ActiveLink className="navbar-brand" to="/"><img src={aita} alt="" /></ActiveLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <ActiveLink className="nav-link" aria-current="page" to="/home">HOME</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink className="nav-link" aria-current="page" to="/atorny">ATTORNEY</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink className="nav-link" to="/practice-area">PRACTICE AREAS</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink className="nav-link" to="/blogs">BLOGS</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink className="nav-link" to="/about">ABOUT ME</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink className="nav-link" to="/login"  >{
                                !user ? "LOGIN" : <span onClick={() => signOut(auth)} >SIGN OUT</span>
                            }</ActiveLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {
                            !user ? "" : <span>{user.email}</span>
                        }
                    </span>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;