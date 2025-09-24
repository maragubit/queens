import { useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import logo from '../assets/images/logo.jfif';
import { Icon } from "@iconify/react/dist/iconify.js";
import { Cookies } from "react-cookie";


function Navegador() {
    const [expanded, setExpanded] = useState(false);
    const cookie= new Cookies();
    const refresh=cookie.get('refresh');
    
    return (
    <section id="navegador">
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <Navbar expand="lg" className="main-nav tex-center">
            {/* ***** Logo Start ***** */}
            <Navbar.Brand  href="index.html" className="logo">
            <img
              src={logo}
              alt="queens Logo"
              className="d-inline-block align-top"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <p className="d-inline navTitle">Queen's English Institute</p>
            </Navbar.Brand>
            {/* ***** Logo End ***** */}

            <Navbar.Toggle aria-controls="main-navbar-nav">
              <span><Icon icon={!expanded ? "famicons:menu" : "famicons:close"} onClick={() => setExpanded(expanded => !expanded)} /></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#services">Instalaciones</Nav.Link>
                <Nav.Link href="#portfolio">Matrículas</Nav.Link>
                <Nav.Link href="#blog">Cursos</Nav.Link>
                <Nav.Link href="https://examscadiz.com/convocatorias-examenes/" target="_blank">Fecha Exámenes</Nav.Link>
                <Nav.Item>
                  <div className="main-red-button">
                    { !refresh ? 
                    <Button as={Link} to="/alumno" variant="danger">
                      Zona alumno
                    </Button>
                    :
                    <Button as={Link} to="/login" variant="danger">
                      Login
                    </Button>
                    }
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
    </section>

    
);
}
export default Navegador;