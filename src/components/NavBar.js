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

                    <Nav.Link href="#home">insta</Nav.Link>
                    <Nav.Link href="#skills">linkedin</Nav.Link>
                    <Nav.Link href="#projects">git</Nav.Link>

                </Nav>

            </Navbar>

        </>
    )
}

export default NavBar