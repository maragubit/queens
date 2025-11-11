import { Button, Container, Form } from "react-bootstrap";
import { getMyUser, loginUser } from "../features/login/apis";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


function Login() {
  const [error, setError]=useState(null);
  const { setAccess,setUser} = useAuth();
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    try {
    const response = await loginUser(email, password);
    Cookies.set('refresh', response.data.refresh, { expires: 7 });
    setAccess(response.data.access);
    const response2=await getMyUser(response.data.access);
    setUser(response2.data);
    setError(null);
    navigate('/');
    
    
    } catch (err) {
    setError(err.response.data.detail);
    }
  };
    
    return (<>
    <Container className="login-container mt-5 mb-5" style={{maxWidth:"500px"}}>
    <Form onSubmit={(e) => {Login(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" pattern=".{6,}" title="Six or more characters" />
        <Button variant="danger" type="submit" className="mt-3">
          login
        </Button>
      </Form.Group>
    </Form> 
    
    </Container>
   {error && <p style={{color:"red"}}>{error}</p>}
    </>);
}
export default Login;