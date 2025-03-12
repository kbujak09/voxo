import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) return <div>Loading...</div>

    return isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
}

export default ProtectedRoute;