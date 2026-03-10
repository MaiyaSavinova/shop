import { Route, Routes } from "react-router";
import { GlobalStyles } from "./index.styles";
import { Products } from "./pages/Products";
import { Auth } from "./pages/Auth";
import { Basket } from "./pages/Basket";
import { ProductsCard } from "./pages/ProductsCard";
import { Feedback } from "./pages/Feedback";
import { Register } from "./pages/Register";
import { 
  AUTH_URL,
  BASKET_URL,
  FEEDBACK_URL,
  HOME_URL,
  PRODUCTS_CARD_URL, 
  PRODUCTS_URL, 
  REGISTER_URL
} from "./types/consts/routing";
import { AuthLeyout } from "./layout/AuthLeyout";
import { Home } from "./pages/Home";
/*import { RoleLayout } from "./layout/RoleLayout";*/


/*в AuthLeyout сделана проверка на регистрацию. Все страницы на которые нужна регистрация включать сюда  <Route path={MAIN_URL} element={<AuthLeyout/>}>
</Route>, например оформить заказ. */

/*<Route path={CREATE_PRODUCTS_URL} element={<CreateProducts/>}/> и <Route path={CREATE_PRODUCTS_URL} element={<RoleLayout}/> дублируют друг друга*/
 /*<Route path={CREATE_PRODUCTS_URL} element={<RoleLayout/>}/>*/

export const App: React.FC = () => {
  return (
    <GlobalStyles>
      <Routes>
        <Route path={HOME_URL} element={<AuthLeyout/>}>
       
        </Route>
        <Route index element={<Home/>}/>
        <Route path={PRODUCTS_URL} element ={<Products/>}/>
        <Route path={PRODUCTS_CARD_URL} element={<ProductsCard/>}/>
        <Route path={BASKET_URL} element={<Basket/>}/>
        <Route path={FEEDBACK_URL} element={<Feedback/>}/>
        <Route path={AUTH_URL} element={<Auth/>}/>
        <Route path={REGISTER_URL} element={<Register/>}/>              
      </Routes>
    </GlobalStyles>
  );
};
