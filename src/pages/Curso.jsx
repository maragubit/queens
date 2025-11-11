import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCursoById } from "../features/cursos/apis";
import { Col, Container, Row } from "react-bootstrap";
function Curso() {
    const { id } = useParams();
    const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                const response = await getCursoById(id);
                setCurso(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCurso();
    }, [id]);

    if (loading) return <p>Cargando curso...</p>;
    if (error) return <p>Error al cargar el curso.</p>;

    return (
        
            
        <Container>
            <h1 className="mt-5">{curso.title}</h1>
            <Row className="h-100 align-items-center justify-content-center">
            <Col xs={12} lg={6}>
            <img className="justify-content-center" style={{maxWidth:"500px"}} src={curso.image} alt={curso.title} />
            </Col>
            <Col xs={12} lg={6}>
                <div className="mt-4 text-start">
                    <p>{curso.description}</p>
                </div>
            </Col>
            </Row>
            <div className="mt-5 mb-5 teacher" style={{border:"solid black"}}>
            {curso.classrooms[0] && <h3>Horario</h3>}
            {curso?.classrooms?.map((clase) => (
            <div key={clase.id} className="mb-3" style={{color:"white !important"}}>
                <p className="text-white">Día: <strong>{clase.day_display}</strong> Hora: <strong>{clase.start_time} - {clase.end_time}</strong> Profesor/a: <strong>{clase.teacher_name}</strong></p>
                
            </div>
            
            ))}
            </div>
            
        </Container>
        
    );
}
export default Curso;