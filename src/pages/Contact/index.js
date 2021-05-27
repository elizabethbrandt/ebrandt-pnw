import { Col, Container, Form, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <Container>
            <Row>

                <Form>
                    <h2>Contact Me</h2>
                    <Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Jane Smith" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="555-555-5555" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Interest in talking to me</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Collaboration</option>
                                <option>Employment</option>
                                <option>Help</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Additional Comments</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>


            </Row>
        </Container>
    )
}