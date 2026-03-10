import React from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_URL } from "../types/consts/routing";


export const AuthLeyout: React.FC = () => {
     const [isAuth, setAuth] = useState<boolean>(true); 

     if(!isAuth) return <Navigate to={AUTH_URL}/>; //если пользователь не авторизован, то он попадет на страничку авторизации, можно добавить в корзину
    
    return <div>
       <Outlet/> 
    </div>
}