import { Outlet } from "react-router-dom";
import NavbarComponent from "../navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
