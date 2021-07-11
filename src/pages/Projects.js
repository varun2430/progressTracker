import { Jumbotron , Accordion } from "react-bootstrap"
import ProjectComponent from "../components/ProjectComponent"

const Projects = () => {
    return (
        <>
            <Jumbotron>

                <h2>Projects</h2>

            </Jumbotron>

            <Accordion defaultActiveKey="0">

                <ProjectComponent name="Console Tetris" progress="10" githubLink="https://github.com/varun2430/console_tetris" eventKey="0" >
                Classic game of tetris in console using C++.
                </ProjectComponent>

                <ProjectComponent name="Progress Tracker" progress="65" githubLink="https://github.com/varun2430/progressTracker" eventKey="1" >
                A website to track the stuff I learn and the projects I'm working on.
                </ProjectComponent>

            </Accordion>
        </>
    )
}

export default Projects
