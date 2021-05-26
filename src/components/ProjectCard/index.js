import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

export default function ProjectCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>Project Description</Card.Text>
                <Card.Text>Technologies</Card.Text>
                <Button variant="primary">Deployed Site</Button>
                <Button variant="primary">Github Repo</Button>
            </Card.Body>
        </Card>
    )
}