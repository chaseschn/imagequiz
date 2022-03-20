import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useState } from "react";

const Quiz = () => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const location = useLocation();
    const quiz = dataService.getQuiz(location.state.id);

    return (
        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
                <Col>
                    <Card className="h-100" >
                        <Card.Img variant="top" src={quiz.questions[currentQuestionNumber].picture} />
                        <Card.Body>
                            <Card.Title>{quiz.name}</Card.Title>
                            <Card.Text>
                                Let's take the quiz now!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup>
                            {quiz.questions[currentQuestionNumber].choices.map(x =>
                                <ListGroup.Item>{x}</ListGroup.Item>
                               )}
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Quiz;
