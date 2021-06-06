import { Container, Jumbotron, Row } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";

export default function Footer() {
    return (
        <Jumbotron>

            <Container>
                <Row>
                    <div className="jumbotron col mr-2 text-center green" id="contact-me">
                        <h1 className="display-5 font-weight-normal">Contact Me</h1>
                        <p className="lead pt-2"><a href="tel:541-908-1121"><i className="fas fa-mobile-alt"></i> 541-908-1121</a></p>
                        <EnvelopeFill />
                        <p className="lead"><a href="mailto:elizabeth.brandt824@gmail.com">
                        elizabeth.brandt824@gmail.com</a></p>
                        <p className="lead"><a href="https://github.com/elizabethbrandt" target="_blank" className="lead"><i
                            className="fab fa-github"></i>GitHub Profile</a></p>
                        <p className="lead"><a href="https://www.linkedin.com/in/elizabeth-brandt-pnw/" target="_blank"
                            className="lead"><i className="fab fa-linkedin"></i> LinkedIn Profile</a></p>
                    </div>

                    <div className="jumbotron col ml-2 text-center green" id="resume">
                        <h1 className="display-5 font-weight-normal pb-5">Resume</h1>
                        <a href="./assets/images/Elizabeth Brandt Resume.pdf" target="_blank"
                            className="lead text-center pt-5">Click
                            here to download a copy of my resume
                        </a>
                    </div>
                </Row>
            </Container>

        </Jumbotron>

    )
}