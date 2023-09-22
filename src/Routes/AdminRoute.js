import React, { useContext } from 'react';
import { authContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(authContext);
    const location=useLocation();
    const [isAdmin,isAdminLoading]=useAdmin(user?.email);

    if(loading ||isAdminLoading){
        return <Spinner></Spinner>
    }




    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;