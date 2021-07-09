import { Jumbotron , Accordion } from "react-bootstrap"
import ProjectComponent from "../components/ProjectComponent"

const Projects = () => {
    return (
        <>
            <Jumbotron>

                <h2>Projects</h2>

            </Jumbotron>

            <Accordion defaultActiveKey="0">

                <ProjectComponent name="Progress Tracker" progress="25" githubLink="https://github.com/varun2430/progressTracker" eventKey="0" >

                A website to track the stuff I learn and the projects I'm working on.

                </ProjectComponent>

            </Accordion>
        </>
    )
}

export default Projects
