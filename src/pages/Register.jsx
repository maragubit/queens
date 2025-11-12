import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser } from "../features/register/apis";
import { getCursos } from "../features/cursos/apis";

function Register() {
    const { email } = useParams();
    const [first_name, setFirstName] = useState("");
    const [error,setError]=useState(null);  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [last_name, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const[passwordError,setPasswordError]=useState(true);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            birthdate: birthdate,
            phone: phone,
            
        };
        try {
            await registerUser(formdata);
            window.location.href = "/login";
        } catch (err) {
            setError(err.response.data.message || "Error al registrar el usuario");
        }
    };
    useEffect(() => {
        if (password === confirmPassword) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
        if (password === "" || confirmPassword === "") {
            setPasswordError(true);
        }
    }, [confirmPassword,password]);

    

    return (
    <Container className="mt-5 mb-5" style={{maxWidth:"600px"}}>
        <h3>Formulario de registro</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" value={email} disabled/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control required type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control pattern ='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$' required type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" name="firs_name" placeholder="Ingresa tu nombre" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control required type="text" name="last_name" placeholder="Ingresa tus apellidos" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control required type="date" name="birthdate" placeholder="Ingresa tu fecha de nacimiento" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>teléfono</Form.Label>
                <Form.Control required type="text" name="phone" placeholder="Ingresa tu teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            
            <Form.Check 
                type="checkbox"
                id="termsCheckbox"
                label="Acepto los términos y condiciones"
                onChange={ (e) => setTermsAccepted(e.target.checked) }
            />


            <Link to="/politica-privacidad" target="_blank">(ver política de privacidad)</Link>
            
            
            <br/>
            <Button className="mt-4" variant="danger" disabled={passwordError || !termsAccepted} type="submit" onClick={(e) => handleSubmit(e)}>
                Registrarse
            </Button>
            {passwordError && <p style={{color:"red"}}>Las contraseñas no coinciden</p>}
            {!termsAccepted && <p style={{color:"red"}}>Debes aceptar los términos y condiciones</p>}

        </Form>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Container>
    );
}
export default Register;