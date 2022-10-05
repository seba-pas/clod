import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {DATA} from "../assets/data.js";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";


function Cards() {
  const ropa = DATA;

  return (
    <Row style={{marginLeft: '20px', marginRight: '20px'}}>
      {ropa &&
        ropa.map((e) => {
          return (
            <Col className="col-3  " >
              <Card style={{ marginTop: "20px", height: '40rem'}}>
                <Card.Img
                  variant="top"
                  src={e.imagen} 
                  className='card-img-top overflow-hidden'
                             />
                <Card.Body>
                  <Card.Title>{e.nombre}</Card.Title>
                  <span>Hecho en {e.tela}</span>
                  <span>Colores Disponibles: {e.color.join(", ")}</span>
                  <span>Talles Disponibles: {e.talles.join(", ")}</span>
                  <span>Guia de taller: 1(M-L) - 2(L-XL) - 3(3XL)</span>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted" style={{fontFamily: 'clod'}}>CLÖD indumentaria</small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

export default Cards;
