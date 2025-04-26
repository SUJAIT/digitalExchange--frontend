/* eslint-disable react-refresh/only-export-components */
import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  isAuthenticated: boolean;
  user: { email: string; role: string } | null;
  setUser: (user: { email: string; role: string } | null) => void;
};

//create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//provide the component
export const AuthProvider = ({ children } : { children : ReactNode}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);


  const [user, setUser] = useState<{ email: string; role: string } | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });


  //load the token from localStorage on first render
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  },[]);

  // const handleSetToken = (token: string | null) => {
  //   setAccessToken(token);
  //   if (token) {
  //     localStorage.setItem("accessToken", token);
  //   } else {
  //     localStorage.removeItem("accessToken");
  //   }
  // }


  //

  const handleSetToken = async (token: string | null) => {
    setAccessToken(token);
    if (token) {
      localStorage.setItem("accessToken", token);
  
      const decode = jwtDecode<{ userMail: string; role: string }>(token);
      const userData = { email: decode.userMail, role: decode.role };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
  
      return userData; // return userData after setting
    } else {
      localStorage.removeItem("accessToken");
      setUser(null);
      localStorage.removeItem("user");
      return null;
    }
  };

  //



  //user and user role checking
  // const handleSetUser = (user: { email: string; role: string } | null) => {
  //   setUser(user);
  //   if (user) localStorage.setItem('user', JSON.stringify(user));
  //   else localStorage.removeItem('user');
  // };





const isAuthenticated = !!accessToken;

return (
  <AuthContext.Provider
    value={{ accessToken, setAccessToken: handleSetToken, user, isAuthenticated }}
  >
    {children}
  </AuthContext.Provider>
);
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
