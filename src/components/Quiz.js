import { useLocation, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useEffect, useState } from "react";


const Quiz = () => {
    const getColor = (answer, choice) => {
      console.log(answer);
      console.log(choice);
      if(color == 1){
        if(answer != choice){
          return "red";
        } else {
          return "green";
        }
      }
    };
    const checkAns = (answer, choice) => {
      if(answer != choice){
        return 0;
      } else {
        return 1;
      }
    }
    const[color,setColor]=useState(0);
    const[count, setCount]=useState(0);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();
    useEffect(() => {
      if(!quiz){
        let x = dataService.getQuiz(id);
        setQuiz(x);
      }
      if(currentQuestionNumber >= 6){
        window.location.href = "./Home";
      }
    });

    if(currentQuestionNumber >= 5){
      return(
        <Container>
        <Row>
          <Col>
            <p>Result: {count}/6</p>
          </Col>
        </Row>
          <Row>
            <Col>
              <button type="button" class="btn btn-primary" onClick={() =>{setCurrentQuestionNumber(currentQuestionNumber + 1)}}>Next</button>
            </Col>
          </Row>
        </Container>
      );
    }
      return (
          <Container>
              <Row xs={1} md={3} className="g-4 text-center">
                  <Col>
                    {quiz ?
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
                                    <ListGroup.Item style={{background:getColor(quiz.questions[currentQuestionNumber].answer, x)}}class="list-group-item list-group-item-action" type="button" onClick={() =>{setColor(1); setCount(count + checkAns(quiz.questions[currentQuestionNumber].answer, x))}}>{x}</ListGroup.Item>
                                   )}
                            </ListGroup>
                        </Card>
                        :
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      }
                  </Col>
              </Row>
              <Row>
                <Col>
                  <button type="button" class="btn btn-primary" onClick={() =>{setCurrentQuestionNumber(currentQuestionNumber + 1); setColor(0)}}>Next</button>
                </Col>
              </Row>
          </Container>
      );
}

export default Quiz;
