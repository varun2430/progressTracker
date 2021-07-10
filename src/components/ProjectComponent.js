import { Container , Card , Accordion, Row, Col, ProgressBar } from "react-bootstrap"

const ProjectComponent = (props) => {

    return (
        <Container>

            <Card>

                <Accordion.Toggle as={Card.Header} eventKey= {`${props.eventKey}`} >

                    <Row>

                        <Col xs={5}>

                            <strong>{props.name}</strong>

                        </Col>

                        <Col>

                            <ProgressBar variant="success" now={`${props.progress}`} label={`${props.progress}%`} ></ProgressBar>
                    
                        </Col>

                    </Row>

                </Accordion.Toggle>

                <Accordion.Collapse eventKey= {`${props.eventKey}`}>

                    <Card.Body>

                        <Card.Text>{props.children}</Card.Text>

                        <Card.Link href={`${props.githubLink}`} target="_blank"><i className="fa fa-github"></i></Card.Link>

                    </Card.Body>

                </Accordion.Collapse>

            </Card>
            
        </Container>
    )
}

export default ProjectComponent