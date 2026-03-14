import { createContext, useState, useEffect, useContext } from "react";
import axiosClient from "../api/axiosClient";

interface User {
    id: number;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuht: boolean;
    login?: (email: string, password: string) => Promise<void>;
    register?: (name: string, email: string, password: string) => Promise<void>;
    logout?: () => void;
}

const AuthContext = createContext<AuthContextType>({
   user: null,
   token: null,
   isAuht: false,

})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const [isAuht, setIsAuht] = useState<boolean>(false);
   
    useEffect(() => {
        if(token) setIsAuht(true);
        else setIsAuht(false);
    }, [token]);

    const login = async (email: string, password: string) => {  //функция авторизации
        const response = await axiosClient.post('/auth/login', { email: email, password: password });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        setToken(token);
        setUser(user);
        setIsAuht(true);
    }

    const register = async (name: string, email: string, password: string) => {
        await axiosClient.post('/auth/register', { name: name, email: email, password: password });

    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setIsAuht(false);
    }

    return (
        <AuthContext.Provider value= {{ user, token, isAuht, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=> useContext(AuthContext);