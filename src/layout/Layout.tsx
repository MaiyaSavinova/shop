import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/Header/header";

export const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

};

//При помощи Layout добавили подвал и шапку на все страницы