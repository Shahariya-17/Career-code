import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);

    const location = useLocation();
   if(loading){
    return <span className="loading loading-spinner text-info"></span>
   }

    if(!user){
       return <Navigate to='/signin' state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;