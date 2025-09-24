import { Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AlumnNav from "./AlumnNav";

function AlumnLayout() {
    return (
    <Container>
        <h4>Zona alumno</h4>
        {/* Panel Alumno */}
        <AlumnNav/>

        {/* Salida */}
        <Outlet />

    </Container>
    );
}
export default AlumnLayout;