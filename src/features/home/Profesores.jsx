import { Card, Col, Container, Row } from "react-bootstrap";
import barbara from '../../assets/images/barbara.jpeg'
import { Icon } from "@iconify/react/dist/iconify.js";

function Profesores(){
    return(
        <Container>
            <h1>Nuestro Equipo <Icon icon="ri:team-fill" color="var(--primary)"/></h1>
            <Row className="mt-5">
                <Col lg={4}>
                    <Card className="text-center teacher mt-4">
                        <Card.Title>Bárbara Agüera</Card.Title>
                        <Card.Img src={barbara}/>
                        <Card.Footer className="mt-2">Directora y profesora de gramática nivel B1, B2, C1</Card.Footer>

                        

                    </Card>
                </Col>
                
            </Row>
           
        </Container>
    )
}

export default Profesores