import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    // let auth = useAuth();
    let location = useLocation();
    if (loading) {
        return <p className='text-center text-bold m-5' style={{ fontSize: "18px", fontWeight: "bold" }}>Loading...</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth