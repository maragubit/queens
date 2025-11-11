import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/images/logot.png"
import cambridge from "../assets/images/cambridge.jpg"

function Footer(){
    return(
        <footer className="footer">
            <Container fixed="bottom">
                <div className="row">
                    <div className="col-lg-12">
                        <p> <img src={logo} style={{width:"50px"}} alt="Logo"/> Copyright © 2025 Queens English Institute</p>
                    </div>
                </div>
                <Container className="ms-3" style={{marginTop:"-35px"}}><img src={cambridge} style={{width:"230px"}} alt="Cambridge University Press"/></Container>
                <Container className="justify-content-md-center" style={{maxWidth:"60%"}}>
                <Row className=" gx-0 gy-0">
                        <Col xs={12} md={4} style={{marginTop:"-15px"}}><p>Política de privacidad</p></Col>
                        <Col xs={12} md={4} style={{marginTop:"-15px"}}><p>Política de cookies</p></Col>
                        <Col xs={12} md={4} style={{marginTop:"-15px"}}><p>Aviso legal</p></Col>
                </Row>
                </Container>

               <div className="maragubit me-0" ><a  href="https://maragubit.es" target="_blank" rel="noopener noreferrer">maragubit tech®</a></div>
            </Container>
        </footer>
    );
}
export default Footer;