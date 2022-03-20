import dataService from "../data_access_layer/local_temporarily_storage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    let takeTheQuiz = (flowerName) => {
        navigate('/quiz', {state: {id: flowerName}});
    }

    return (
        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
                {dataService.getFlowers().map((x, index) => (
                    <Col key={index}>
                        <Card className="h-100" onClick={() => takeTheQuiz(x.name)}>
                            <Card.Img variant="top" src={x.picture} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>


    );
}

export default Home;
