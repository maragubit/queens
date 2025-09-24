import Navbar from "../components/Navegador";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "react-bootstrap";
function AppLayout() {
    return (<>
        <Navbar/>
        <Container style={{minHeight: "80vh"}}>
          <Outlet/>
        </Container>
        <Footer/>
        </>
    );
}
export default AppLayout;