import { Button, Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AlumnNav from "../features/alumno/AlumnNav";
import { useAuth } from "../AuthProvider";

function AlumnLayout() {
    const { user} = useAuth();
    
    if (user?.role !== 'student') {
        return (<>
            <div className="mb-5">Este espacio es exclusivo para estudiantes</div>
                </>);
        }
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