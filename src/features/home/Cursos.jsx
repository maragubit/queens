import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { getCursos } from "../cursos/apis";
import { Link } from "react-router-dom";
function Cursos(){
    const [cursos, setCursos]=useState([]);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            try {
            const response=await getCursos();
            setCursos(response.data);
            setLoading(false);
            } catch (err) {
            setError(err.message);
            setLoading(false);
            }
        }
        fetchData();
    },[])
    return(
        <Container>
            <h1 className="mb-5">Nuestros cursos <Icon icon="streamline:class-lesson-remix" color="var(--primary)"/></h1>
            <div id="about" className="about-us section">
                
                <div className="container">
                    <div className="row">
                    {/* Left Image */}
                    <div className="col-lg-2">
                        <div
                        className="left-image wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.2s"
                        >
                        
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-lg-8 align-self-center">
                        <div className="services">
                        <div className="row">
                            {!loading && <>
                            {/* Service 1 */}
                            {cursos.map((curso)=>(

                            <div className="col-lg-6">
                                <Link to={`/cursos/${curso.id}`}><div
                                    className="item wow fadeIn"
                                    data-wow-duration="1s"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="icon">
                                        <span>{curso.acronym}</span>
                                    </div>
                                    <div >
                                        <h4>{curso.title}</h4>
                                        <p className="justif">{curso.short_description}</p>
                                    </div>
                                </div></Link>
                            </div>))}
                            </>}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
          {/* End Services */}
        </Container>
    )
}
export default Cursos;