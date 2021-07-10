import { ListGroup , ProgressBar , Row , Col } from "react-bootstrap"


const SkillComponent = (props) => {
    return (
        <>

            <ListGroup.Item>

                <Row>

                    <Col xs={4}>
                        {props.name}
                    </Col>

                    <Col>
                        <ProgressBar variant="success" now={`${props.progress}`} label={`${props.progress}%`} ></ProgressBar>
                    </Col>

                </Row>

            </ListGroup.Item>
            
        </>
    )
}

export default SkillComponent