import { Alert, Card, CardBody, CardFooter, CardImg, Col, Form, FormControl,Row } from "react-bootstrap";
import CloseSession from "./CloseSession";
import { useAuth } from "../../AuthProvider";
import { useEffect, useState } from "react";
import { updateUser } from "../users/apis";
import imgDefault from "../../assets/images/anonimus.jpg"

function MyProfile() {
    const { user, new_access_token, access, get_user_variables } = useAuth();
    const [error,setError]=useState(null);
    useEffect(() => {
        new_access_token();
        get_user_variables(access);
    }, []);

    const updateMyUser= async (img)=>{
        const formData = new FormData();
        formData.append('image', img);
        setError(null);
        //window.location.reload()
        try{
            await updateUser(user.id,formData,access);
        }catch(err){
            setError(err.message);
        }
    }
    
    return (
        <div className="mb-5">
            <CloseSession />
            <Card className="border-0">
                <img className="profile-img mb-2" src={user?.image ? user.image : imgDefault} alt="Perfil de Usuario" />
                <div className="mb-3 text-center justify-content-center mx-auto" style={{maxWidth:"500px"}}>
                <input type="file" accept="image/png, image/jpeg"  onChange={(e)=>{updateMyUser(e.target.files[0]);}}/>
                </div>
                <CardBody>
                    <div className="mb-5 mt-5">
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
            {error && <Alert variant="danger">{error}</Alert>}
        </div>
    );
}
export default MyProfile;
                