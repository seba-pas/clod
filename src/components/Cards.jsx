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
              <Card className='carta' style={{ marginTop: "20px", height: '28rem'}}>
                <Card.Img
                  variant="top"
                  src={e.imagen} 
                  className='card-img-top overflow-hidden'
                             />
                <Card.Body>
                  <Card.Title>{e.nombre}</Card.Title>
                  <small>Hecho en: {e.tela}</small>
                  <small>Colores Disponibles: {e.color.join(", ")}</small>
                  <small>Talles Disponibles: {e.talles.join(", ")}</small>
                  <small>Guia de taller: 1(M-L) - 2(L-XL) - 3(3XL)</small>
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
