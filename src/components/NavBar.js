import { Link } from "react-router-dom";
import { Navbar , Nav} from "react-bootstrap"

const NavBar = () => {
    return (
        
        <>

            <Navbar bg="dark" variant="dark">

                <Nav className="mr-auto">

                    <Link className="nav-link" to="/">home</Link>
                    <Link className="nav-link" to="/skills">skills</Link>
                    <Link className="nav-link" to="/projects">projects</Link>

                </Nav>

                <Nav className="ml-auto">

                    <Nav.Link href="https://www.instagram.com/varunkadkade/" target="_blank"><i className="fa fa-instagram"></i></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/varun-kadkade-7359aa214/" target="_blank"><i className="fa fa-linkedin"></i></Nav.Link>
                    <Nav.Link href="https://github.com/varun2430" target="_blank"><i className="fa fa-github"></i></Nav.Link>

                </Nav>

            </Navbar>

        </>
    )
}

export default NavBar