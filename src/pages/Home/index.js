import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Logo from "../../images/EBLogo.png"

export default function Home() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <img 
                            src={Logo}
                            height="700"
                            length="700"
                            alt="Floral logo design displaying Elizabeth Brandt, Full Stack Web Developer"
                        />
                    </Col>
                    <Col>
                        <h4>Full Stack Web Developer utilizing experience in human resources, project management, and healthcare to create polished, user-friendly, and organized websites and software platforms. Earned a certificate in Full Stack Web Development from the University of Washington. Adaptable problem-solver who is passionate about developing applications that focus on clarity, ease, and efficiency for all while still providing a powerful tool for their needs. Strengths in planning, project management, process improvement, and leadership.
                        </h4>
                        <Button>Learn more about me</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}