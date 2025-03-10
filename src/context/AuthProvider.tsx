// import { createContext, ReactNode, useState, useEffect } from "react";

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     const checkAuth = async () => {
//         try {
//             const res = await fetch('http://localhost:5000/auth', {
//                 method: 'GET',
//                 credentials: 'include'
//             });
//             if (!res.ok) {
//                 return console.log('err');
//             }
//             const json = await res.json();
//             setUser(json.user);
//         }
//         catch (err) {
//             setUser(null);
//             console.error(err);
//         }
//         setLoading(false);
//     }

//     useEffect(() => {
//         checkAuth();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, loading, checkAuth }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }