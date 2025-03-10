import { useEffect, useState } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    const checkAuth = async () => {
        try {
            const res = await fetch(`http://localhost:5000/auth`, { 
                headers: {
                    'Access-Control-Allow-Credentials': 'true'
                },
                credentials: 'include' 
            });

            if (!res.ok) {
                throw new Error('Failed to authenticate');
              }

            const json = await res.json();

            if (!json.user) {
                setIsAuthenticated(false);
            }

            setIsAuthenticated(true);
        }
        catch (err) {
            setIsAuthenticated(false);
            console.error(err);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return isAuthenticated;
};

export default useAuth;