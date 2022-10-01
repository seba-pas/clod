import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ph from "../assets/img/IMG-20220919-WA0030.jpg";
import ph1 from "../assets/img/IMG-20220919-WA0048.jpg";
import { Container, Col, Button } from "react-bootstrap";
import DATA from "../assets/data";

function GroupExample() {
  return (
    <Container className="p-4">
      <Col md="12">
        <CardGroup>
          <Card className="me-3" style={{ marginLeft: "20px" }}>
            <Card.Img variant="top" src={ph} />
            <Card.Body>
              <Card.Title>Bikini bob esponja</Card.Title>
              <Card.Text>este es el gran bikini de bob exponga</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
          <Card className="me-3">
            <Card.Img variant="top" src={ph1} />
            <Card.Body>
              <Card.Title>Tunica de dumbledore</Card.Title>
              <Card.Text>esta es la tunica magica de dumbledorea</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
          <Card className="me-3">
            <Card.Img variant="top" src={ph1} />
            <Card.Body>
              <Card.Title>Tunica de dumbledore</Card.Title>
              <Card.Text>esta es la tunica magica de dumbledorea</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
          <Card className="me-3">
            <Card.Img variant="top" src={ph1} />
            <Card.Body>
              <Card.Title>Tunica de dumbledore</Card.Title>
              <Card.Text>esta es la tunica magica de dumbledorea</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
      <Col md="12">
        <CardGroup className="mt-4">
          <Card className="me-3" style={{ marginLeft: "20px" }}>
            <Card.Img variant="top" src={ph} />
            <Card.Body>
              <Card.Title>Bikini bob esponja</Card.Title>
              <Card.Text>este es el gran bikini de bob exponga</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
          <Card className="me-3">
            <Card.Img variant="top" src={ph1} />
            <Card.Body>
              <Card.Title>Tunica de dumbledore</Card.Title>
              <Card.Text>esta es la tunica magica de dumbledorea</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
          <Card className="me-3">
            <Card.Img variant="top" src={ph1} />
            <Card.Body>
              <Card.Title>Tunica de dumbledore</Card.Title>
              <Card.Text>esta es la tunica magica de dumbledorea</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
          <Card className="me-3">
            <Card.Img variant="top" src={ph1} />
            <Card.Body>
              <Card.Title>Tunica de dumbledore</Card.Title>
              <Card.Text>esta es la tunica magica de dumbledorea</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Diseño de CLÖD </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
    </Container>
  );
}

export default GroupExample;
