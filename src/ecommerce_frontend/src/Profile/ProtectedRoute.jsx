import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute() {
    const { loggedIn } = useAuth();
    console.log("protected ? ",loggedIn);
    return (
        loggedIn ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default ProtectedRoute