import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
function Cursos(){
    return(
        <Container>
            <h1 className="mb-3">Nuestros cursos <Icon icon="streamline:class-lesson-remix" color="var(--primary)"/></h1>
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
                            {/* Service 1 */}
                            <div className="col-lg-6">
                            <div
                                className="item wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.5s"
                            >
                                <div className="icon">
                                <span>B1</span>
                                </div>
                                <div className="right-text">
                                <h4>Inglés B1</h4>
                                <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                </div>
                            </div>
                            </div>

                            {/* Service 2 */}
                            <div className="col-lg-6">
                            <div
                                className="item wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.7s"
                            >
                                <div className="icon">
                                 <span>B2</span>
                                </div>
                                <div className="right-text">
                                <h4>Inglés B2</h4>
                                <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                </div>
                            </div>
                            </div>

                            {/* Service 3 */}
                            <div className="col-lg-6">
                            <div
                                className="item wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.9s"
                            >
                                <div className="icon">
                                 <span>C1</span>
                                </div>
                                <div className="right-text">
                                <h4>Inglés C1</h4>
                                <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                </div>
                            </div>
                            </div>

                            {/* Service 4 */}
                            <div className="col-lg-6">
                            <div
                                className="item wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="1.1s"
                            >
                                <div className="icon">
                                <Icon icon="whh:profile" width="50" color="var(--primary)" />
                                </div>
                                <div className="right-text">
                                <h4>Clases personalizadas</h4>
                                <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                </div>
                            </div>
                            </div>
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