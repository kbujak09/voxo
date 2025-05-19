import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserType, AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

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

          if (res.status !== 200) {
              setIsAuthenticated(false);
              navigate('/login');
              return;
          }

          const json = await res.json();

          if (json.user) {
              setIsAuthenticated(true);
              setUser(json.user);
          }
      }
      catch (err) {
          console.error(err);
          setIsAuthenticated(false);
          navigate('/login');
          return;
      }
      finally {
          setLoading(false);
     }
  }

  useEffect(() => {
      checkAuth();
  }, []);

    return (
      <AuthContext.Provider value={{ user, loading, checkAuth, isAuthenticated, setUser }}>
          {children}
      </AuthContext.Provider>
    );
}

export default AuthContext;