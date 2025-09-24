import { Button, Container, Form } from "react-bootstrap";

function Login() {
    const Login = async (e) => {
        e.preventDefault();
        const email = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
    <Container className="login-container mt-5 mb-5">
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
    );
}
export default Login;