
import { useAuth } from "../../AuthProvider";
function Myclassrooms() {
    const { user } = useAuth();
    return <div>
        
        <h3 style={{textDecoration:"underline"}}>{user?.student.course}</h3>
        {user?.student?.classrooms?.map((classroom) => (
            <div key={classroom.id}>{classroom.day_display} {classroom.start_time} - {classroom.end_time} ( {classroom.teacher_name}) Profesor: {classroom.teacher_name}</div>
        ))}
    </div>
}
export default Myclassrooms;