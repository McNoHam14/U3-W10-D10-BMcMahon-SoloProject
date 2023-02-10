import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => {
    return state.weather;
  });
  if (!weather) {
    return <></>;
  } else {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={4} md={4}></Col>
            <Col xs={4} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{weather.name} </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {weather.weather[0].main}
                  </Card.Subtitle>
                  <Card.Text>{weather.weather[0].description}</Card.Text>
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "STORE_CITY",
                        payload: weather,
                      });
                    }}
                  >
                    ADD TO FAV
                  </Button>
                </Card.Body>
                <Card.Link href="#">CITY</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card>
            </Col>
            <Col xs={4} md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default WeatherInfo;
