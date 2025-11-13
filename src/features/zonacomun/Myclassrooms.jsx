
import { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider";
import {getCursos} from "../cursos/apis";
import { Button, Container } from "react-bootstrap";
import { getMe, updateMyClassrooms } from "../alumno/apis";
function Myclassrooms() {
    const { user,access } = useAuth();
    const [cursos, setCursos] = useState([]);
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const[selectedClassrooms, setSelectedClassrooms]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await getCursos();
                setCursos(response.data);
                const response2 = await getMe(access);
                setStudent(response2.data);
                setLoading(false);
            }catch(error){
                console.error("Error fetching cursos:", error);
            }
        }
        fetchData();
        },[]);

        const updateClassrooms=async()=>{
            //llamar a la api para actualizar las aulas del alumno
            try{
                const classroom_ids=selectedClassrooms;
                await updateMyClassrooms(student.id, access, classroom_ids);
                window.location.reload();
            }catch(error){
                console.error("Error updating classrooms:", error);
                alert("Error al actualizar las aulas");
            }
        }
    return <div>
        <div className="mb-4 teacher">
        <h3 className="" style={{textDecoration:"underline"}}>{user?.student.course}</h3>
        {user?.student?.classrooms?.map((classroom) => (
            <div key={classroom.id}>{classroom.day_display} {classroom.start_time} - {classroom.end_time} ( {classroom.teacher_name})</div>
        ))}
        </div>
        <h5 className="mt-5">Clases disponibles:</h5>
        {!loading && cursos.map((curso) => (
            <Container>
            <div className="mt-3" key={curso.id}>{curso.title}</div>
            {curso.classrooms.map((classroom) => (
                <div key={classroom.id}>
                    <input type="checkbox" id={`classroom-${classroom.id}`} name={`classroom-${classroom.id}`} value={classroom.id} onChange={() => {
                        if (selectedClassrooms.includes(classroom.id)) {
                            setSelectedClassrooms(selectedClassrooms.filter(id => id !== classroom.id));
                        } else {
                            setSelectedClassrooms([...selectedClassrooms, classroom.id]);
                        }
                    }} /> <label htmlFor={`classroom-${classroom.id}`}>{classroom.day_display} {classroom.start_time} - {classroom.end_time} ( {classroom.teacher_name})</label>
                </div>
            ))}
            </Container>
        ))}
        <Button variant="danger" className="mt-2" onClick={updateClassrooms}>Cambiar mis clases</Button>
       
    </div>
}
export default Myclassrooms;