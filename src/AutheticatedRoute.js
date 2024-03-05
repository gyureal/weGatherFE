import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { requestCurrentUser } from './slice/authSlice';
import { useEffect } from 'react';


const AutheticatedRoute = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCurrentUser());
    }, []);

    const currentUser = useSelector((state) => {
        return state.authSlice.currentUser;
    });

    const isLoggedIn = () => {
        return !!currentUser;
    }

    return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default AutheticatedRoute;