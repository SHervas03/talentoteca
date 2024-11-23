import { Outlet, useLocation } from "react-router"
import Nav from "../components/layout/nav/Nav"
import Footer from "../components/layout/footer/Footer"
import { useEffect } from "react";

function MainLayout() {

    const location = useLocation()
    

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                document.title = "Inicio";
                break;
            case "/Recetas":
                document.title = "Recetas";
                break;
            case "/FAQ":
                document.title = "FAQ";
                break;
            case "/Contact":
                document.title = "Contacto";
                break;
            default:
        }
    }, [location.pathname]);

    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout