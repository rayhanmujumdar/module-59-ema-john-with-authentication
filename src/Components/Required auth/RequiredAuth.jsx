import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequiredAuth = (props) => {
    const { children } = props
    const location = useLocation()
    const [user,loading] = useAuthState(auth)
    if(loading){
        return children
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default RequiredAuth;