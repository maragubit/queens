import { Card, Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getProfesores } from "../profesor/apis";
import { useEffect, useState } from "react";
function Profesores(){
    const [profesores, setProfesores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProfesores();
                setProfesores(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return(
        <Container>
            <h1>Nuestro Equipo <Icon icon="ri:team-fill" color="var(--primary)"/></h1>
            <Row className="d-flex mt-1 g-3">
                {profesores.map((profesor) => (
                    <Col lg={4} key={profesor.id}>
                        <Card className="text-center teacher mt-4 h-100">
                            <Card.Title>{profesor.user.first_name}</Card.Title>
                            <Card.Img src={profesor.user.image} />
                            <Card.Footer className="mt-2">{profesor.short_description}</Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )

                        

                    
    
}

export default Profesores