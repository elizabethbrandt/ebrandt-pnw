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
                            alt="Floral logo design displaying Elizabeth Brandt, Full Stack Web Developer"
                        />
                    </Col>
                    <Col>
                        <h1>Brand statement here</h1>
                        <Button>Learn about me</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}