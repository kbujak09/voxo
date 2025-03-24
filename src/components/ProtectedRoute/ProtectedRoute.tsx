import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import Loading from '../Loading/index';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) return <Loading />

    return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
}

export default ProtectedRoute;