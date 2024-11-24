import { Outlet, useLocation } from "react-router";
import Nav from "../components/layout/nav/Nav";
import Footer from "../components/layout/footer/Footer";
import { useEffect } from "react";

function MainLayout() {
  const location = useLocation();

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
      case "/Registro":
        document.title = "Registro";
        break;
      case "/Mascotas":
        document.title = "Mascotas";
        break;
      default:
    }
  }, [location.pathname]);

  const isAuthRoute = location.pathname === "/Registro";

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthRoute && <Nav />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isAuthRoute && <Footer />}
    </div>
  );
}

export default MainLayout;
