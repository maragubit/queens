import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AlumnNav() {
    return <Row> 
            <Col className="mainPanel mb-5">
                <Nav variant="tabs" defaultActiveKey="/alumno">
                    <Nav.Item>
                        <Nav.Link eventKey="/alumno" as={Link} to="/alumno">Perfil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/exams">Exámenes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/resources" as={Link} to="resources">Recursos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/settings">Settings</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>;
}
export default AlumnNav;