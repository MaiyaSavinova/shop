import React from "react";
import { useNavigate } from "react-router-dom";

export const Products: React.FC = () => {
      const navigate = useNavigate();

    const clickHandly = () => { //функция возврата на главную страницу
        navigate("/");
    }
   
    return (
    <><p>Каталог товаров</p>
    <button onClick={clickHandly}>Вернуться на главную страницу</button> </>
    )

}

