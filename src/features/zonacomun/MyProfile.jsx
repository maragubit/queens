import { Card, CardBody, CardFooter, CardImg, Col, FormControl,Row } from "react-bootstrap";
import anonimus from '../../assets/images/anonimus.jpg';


function MyProfile() {
    return (
        <div className="mb-5">
            <Card>
                <CardImg className="profile-img" src={anonimus} alt="Perfil de Usuario" />
                <CardBody>
                    <div className="mb-3">
                        <Row className="g-3">
                            <Col xs={12} lg={12} ><FormControl style={{maxWidth: "600px",marginTop:"-20px"}} className="justify-content-center mx-auto mb-3 text-center" value="Nombre de Usuario" disabled={true} /></Col>
                            <Col xs={12} lg={3}> <FormControl className="d-inline" type="date" value="2012-01-01" disabled={true}/></Col>
                            <Col xs={12} lg={6}><FormControl type="email" value="usuario@ejemplo.com" disabled={true}/></Col>
                            <Col xs={12} lg={3}><FormControl type="phone" value="666-255-125" disabled={true}/>  </Col>

                        </Row>
                    </div>
                </CardBody>
                <CardFooter>
                    Matriculado en Inglés B2
                </CardFooter>
            </Card>
        </div>
    );
}
export default MyProfile;
                