import { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import logo from '../assets/images/logo.jfif';
import { Icon } from "@iconify/react/dist/iconify.js";
import Cookies  from "js-cookie";
import { getCursos } from "../features/cursos/apis";
import { useAuth } from "../AuthProvider";


function Navegador() {
    const [expanded, setExpanded] = useState(false);
    const refresh=Cookies.get('refresh');
    const [cursos, setCursos]=useState([]);
    const [loading, setLoading]=useState(true);
    const { user, new_access_token } = useAuth();

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await getCursos();
                const data=response.data;
                setCursos(data);
            } catch (error) {
                console.error('Error fetching cursos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    if( refresh && !user){
      new_access_token();
    }

    return (
    <section id="navegador">
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <Navbar expand="lg" className="main-nav tex-center" expanded={expanded}>
            {/* ***** Logo Start ***** */}
            <Navbar.Brand  as={Link} to="/" className="logo">
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
                <Nav.Link as={Link} to="/" className="active" onClick={() => setExpanded(false)}>
                  Home
                </Nav.Link>
                <Nav.Link href="#about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
                <Nav.Link href="#services" onClick={() => setExpanded(false)}>Instalaciones</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setExpanded(false)}>Matrículas</Nav.Link>
                <NavDropdown title="Cursos" id="nav-cursos-dropdown">
                  {!loading && cursos.map((curso)=>(
                    <NavDropdown.Item key={curso.id} as={Link} to={`/cursos/${curso.id}`} onClick={() => setExpanded(false)}>{curso.title}</NavDropdown.Item>
                  ))} 
                  
                </NavDropdown>
                <Nav.Link href="https://examscadiz.com/convocatorias-examenes/" target="_blank">Fecha Exámenes</Nav.Link>
                <Nav.Item>
                  <div className="main-red-button">
                    { refresh ? 
                    <Button as={Link} to={ user?.role !== 'student' ? "/profesor" : "/alumno"} variant="danger" onClick={() => setExpanded(false)}>
                      Aula virtual
                    </Button>
                    :
                    <Button as={Link} to="/login" variant="danger" onClick={() => setExpanded(false)}>
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