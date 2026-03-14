import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_URL } from "../types/consts/routing";
import { useAuth } from "../context/AuthContext";


export const AuthLayout: React.FC = () => {
     const { isAuht } = useAuth();

     if(!isAuht) return <Navigate to={AUTH_URL}/>; //если пользователь не авторизован, то он попадет на страничку авторизации, можно добавить в корзину
    
    return (<div>
       <Outlet/> 
    </div>
    );
};