import { createContext, ReactNode, useState, useEffect } from "react";

import { UserType, AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    const checkAuth = async () => {
        try {
            const res = await fetch('http://localhost:5000/auth', {
                headers: {
                    'Access-Control-Allow-Credentials': 'true'
                },
                credentials: 'include'
            });
            if (!res.ok) {
                return console.log('err');
            }
            const json = await res.json();
            setIsAuthenticated(true);
            setUser(json.user);
        }
        catch (err) {
            setUser(null);
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, checkAuth, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;