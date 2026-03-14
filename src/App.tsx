import { AuthProvider } from "./context/AuthContext"
import { Route, Routes } from "react-router";
import { GlobalStyles } from "./index.styles";
import { Products } from "./pages/Products";
import { Auth } from "./pages/Auth";
import { Basket } from "./pages/Basket";
import { ProductsCard } from "./pages/ProductsCard";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import {
  AUTH_URL,
  BASKET_URL,
  FAVORYTE_URL,
  HOME_URL,
  PRODUCTS_CARD_URL,
  PRODUCTS_URL,
  PROFILE_URL,
  REGISTER_URL,
} from "./types/consts/routing";
import { AuthLayout } from "./layout/AuthLayout";
import { Layout } from "./layout/Layout";
import { Favoryte } from "./pages/Favoryte";


/*
<AuthProvider>    </AuthProvider>
*/
export const App: React.FC = () => {
  return (
    <>
    <GlobalStyles/>
      <Routes>
        <Route path={HOME_URL} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PRODUCTS_URL} element={<Products />} />
          <Route path={PRODUCTS_CARD_URL} element={<ProductsCard />} />
        </Route>

        <Route path={BASKET_URL} element={<Basket />} />
        <Route path={AUTH_URL} element={<Auth />} />
        <Route path={REGISTER_URL} element={<Register />} />

        <Route path={HOME_URL} element={<AuthLayout />}>
          <Route path={PROFILE_URL} element={<Profile />} />
          <Route path={FAVORYTE_URL} element={<Favoryte />} />
        </Route>
        
      </Routes>
    </>
  );
};
