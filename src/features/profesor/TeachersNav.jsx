import { Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth} from "../../AuthProvider";

function TeachersNav() {
    const domain=process.env.REACT_APP_DOMAIN;
    const { user } = useAuth();
    return <Row> 
            <Col className="mainPanel mb-5">
                <Nav variant="tabs" defaultActiveKey="">
                    <Nav.Item>
                        <Nav.Link eventKey="" as={Link} to="">Perfil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/my-students" as={Link} to="my-students">Mis alumnos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/exams" as={Link} to="exams">Exámenes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/resources" as={Link} to="resources">Recursos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/settings" as={Link} to="settings">Settings</Nav.Link>
                    </Nav.Item>
                    {user?.role === 'admin' && (
                        <Nav.Item>
                            <Nav.Link as={Link} to={`${domain}/admin`} target="_blank">Admin</Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>
            </Col>
        </Row>;
}
export default TeachersNav;