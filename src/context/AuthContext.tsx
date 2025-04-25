/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  isAuthenticated: boolean;
};

//create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//provide the component
export const AuthProvider = ({ children } : { children : ReactNode}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  //load the token from localStorage on first render
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  },[]);

  const handleSetToken = (token: string | null) => {
    setAccessToken(token);
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
  }


const isAuthenticated = !!accessToken;

return (
  <AuthContext.Provider
    value={{ accessToken, setAccessToken: handleSetToken, isAuthenticated }}
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
