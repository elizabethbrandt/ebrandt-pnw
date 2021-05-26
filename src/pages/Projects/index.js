import { Container, Row } from "react-bootstrap";
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
    return (
        <Container>
            <Row>
                <ProjectCard />
                <ProjectCard />
            </Row>
        </Container>
    )
}