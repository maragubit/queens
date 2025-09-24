import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

function SubNavHome() {
    const [open, setOpen] = useState(false);

    return(
    <Navbar className="submenu" bg="dark" variant="dark" expanded={open}  expand="lg">
    <Icon className="dropdown-icon ms-2" icon="ls:down" onClick={() => setOpen(!open)}/>
      
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          <Nav.Link className="nav-link2" href="#cursos">Nuestros cursos</Nav.Link>
          <Nav.Link className="nav-link2" href="#profesores">Nuestro equipo</Nav.Link>
          <Nav.Link className="nav-link2" href="#map">Ubicación</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
export default SubNavHome;