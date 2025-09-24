import { useState } from "react";
import { Col, Container, FormControl, Nav, Row } from "react-bootstrap";


function Resources() {
const [title, setTitle] = useState("Libros");
const [search, setSearch] = useState("");

function handleSelect(selectedKey) {
  switch (selectedKey) {
    case "libros":
      setTitle("Libros");
      break;
    case "Audios":
      setTitle("Audios");
      break;
    case "Documentos":
      setTitle("Documentos");
      break;
    default:
      setTitle("Libros");
  }
};
  return(
  <Container className="w-100">
    <Row className="g-0">
        <Col xs="12" lg="2" className="mb-3">
        <Nav className="subPanel flex-column text-center" variant="underline" defaultActiveKey="libros">
            <Nav.Item>
                <Nav.Link eventKey="libros" onClick={() => handleSelect("libros")}>Libros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Audios" onClick={() => handleSelect("Audios")}>Audios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Documentos" onClick={() => handleSelect("Documentos")}>Documentos</Nav.Link>
            </Nav.Item>
        </Nav>
        </Col>

        <Col xs="12" lg="10" className="mb-3 text-center">
            <h5>{title}</h5>
            <FormControl className="w-50 justify-content-center mx-auto" placeholder="buscar ..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </Col>


    </Row>
  </Container>
  );
}
export default Resources;