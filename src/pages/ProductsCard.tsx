import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const ProductsCard: React.FC = () => {
 const navigate = useNavigate();

    const clickHandly = () => { //функция возврата на главную страницу
        navigate("/");
    }
    return (
        <>
            <p>Карточка товара</p>
            <button onClick={clickHandly}>Вернуться на главную страницу</button> 
        </>
    )
};
