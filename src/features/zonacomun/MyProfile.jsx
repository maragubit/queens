import { Card, CardBody, CardFooter, CardImg, Col, FormControl,Row } from "react-bootstrap";
import CloseSession from "./CloseSession";
import { useAuth } from "../../AuthProvider";
import { useEffect } from "react";

function MyProfile() {
    const { user, new_access_token } = useAuth();
    
    useEffect(() => {
        new_access_token();
    }, []);
    
    return (
        <div className="mb-5">
            <CloseSession />
            <Card className="border-0">
                <img className="profile-img mb-5" src={user?.image} alt="Perfil de Usuario" />
                <CardBody>
                    <div className="mb-5">
                        <Row className="g-3">
                            <Col xs={12} lg={12} ><FormControl style={{maxWidth: "600px",marginTop:"-20px"}} className="justify-content-center mx-auto mb-3 text-center" value={user?.first_name} disabled={true} /></Col>
                            <Col xs={12} lg={3}> <FormControl className="d-inline" type="date" value={user?.birthdate} disabled={true}/></Col>
                            <Col xs={12} lg={6}><FormControl type="email" value={user?.email} disabled={true}/></Col>
                            <Col xs={12} lg={3}><FormControl type="phone" value={user?.phone} disabled={true}/>  </Col>

                        </Row>
                    </div>
                </CardBody>
                <CardFooter>
                    {user?.role === 'student' ? `Matriculado en ${user?.student.course}` : ''}
                </CardFooter>
            </Card>
        </div>
    );
}
export default MyProfile;
                