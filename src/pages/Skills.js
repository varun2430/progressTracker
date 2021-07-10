import { Container, Jumbotron, ListGroup } from "react-bootstrap";
import SkillComponent from "../components/SkillComponent";

const Skills = () => {
    return (
        <>

            <Jumbotron>

                <h2>Skills</h2>

            </Jumbotron>

            <Container>

                <h5>Languages:</h5>
                <ListGroup>

                    <SkillComponent name="C++" progress="50" />
                    <SkillComponent name="Javascript" progress="25" />
                    <SkillComponent name="Python" progress="50" />
                    <SkillComponent name="Matlab" progress="25" />

                </ListGroup>

                <br/>

                <h5>Font-end:</h5>
                <ListGroup>

                    <SkillComponent name="HTML" progress="50" />
                    <SkillComponent name="CSS" progress="50" />

                </ListGroup>

            </Container>
            
        </>
    )
}

export default Skills
