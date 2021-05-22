import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from "react-bootstrap";

export default function Home() {
    return (
        <Jumbotron>
            <h1>Elizabeth Brandt</h1>
            <h3>Web Developer</h3>
            <Button>Learn about me</Button>
        </Jumbotron>
    )
}