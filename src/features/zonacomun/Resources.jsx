import { useEffect, useState } from "react";
import { Col, Container, FormControl, Nav, Row } from "react-bootstrap";
import {useAuth} from "../../AuthProvider";
import { getLibros } from "./apis";
import Libros from "./Libros";


function Resources() {
const [title, setTitle] = useState("Libros");
const [search, setSearch] = useState("");
const[ libros, setLibros]=useState([]);
const [librosFiltered, setLibrosFiltered]=useState([]);
const [loading, setLoading] = useState(true);
const { access } = useAuth();

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

useEffect(() => {
  const fetchLibros = async () => {
    try {
      const response = await getLibros(access); 
      setLibros(response.data);
      setLibrosFiltered(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching libros:", error);
    }
  };
  fetchLibros();
}, []);

useEffect(() => {
  if (title==="Libros") {
  const filtered = libros.filter((libro) =>
    libro.title.toLowerCase().includes(search.toLowerCase())
  );
  setLibrosFiltered(filtered);
  }
}, [search, libros, title]);

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
        <Container>
          {loading ? <p>Loading...</p> : title=== "Libros" && <Libros libros={librosFiltered} /> }
        </Container>


    </Row>
  </Container>
  );
}
export default Resources;