import { Card, Col, Row } from "react-bootstrap";
import book from "../../assets/images/book.png";
import { Link } from "react-router-dom";
function Libros({libros}) {
  return(<>
  <Row className="g-3">
  {libros?.map(libro => (

            <Col xs="12" md="6" lg="4" key={libro.id} className="d-flex justify-content-center  p-auto">
            <Link to={libro.file} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card key={libro.id} className="mb-3 border-0">
            
            <Card.Title>{libro.title}</Card.Title>
            <Card.Img className="justify-content-center mx-auto" src={book} alt={libro.title} style={{ height: '300px', width: '190px' }} />
            <Card.Text>{libro.author}</Card.Text>
            <Card.Footer className="text-muted"> {libro.course.title}</Card.Footer>

            </Card>
            </Link>
            </Col>
          ))}
  </Row>
  </>)
}
export default Libros;