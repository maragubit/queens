import { Button, Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import TeacherNav from "../features/profesor/TeachersNav";
import { useAuth } from "../AuthProvider";

function TeacherLayout() {
    const { user} = useAuth();
   
    if (user?.role === 'student') {
        return (<>
            <div className="mb-5">Este espacio es exclusivo para profesores</div>
        </>);
    }
    return (
        <Container>
            <h4>Zona profesor</h4>
            {/* Panel Profesor */}
            <TeacherNav />

            {/* Salida */}
            <Outlet />

        </Container>
    );
}
export default TeacherLayout;

       