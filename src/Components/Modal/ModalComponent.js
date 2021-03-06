import React, { useState } from "react";
import { Button, Modal, Row, Col, Container, ListGroup } from "react-bootstrap";

export const ModalComponent = ({ pokemon }) => {
  /* If you open the modal with the button "Show" show state chante to true and close to false */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Show
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg bg-warning">
          <Modal.Title>
            <h2>{pokemon.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <h4>Stadistics</h4>
              <Col xs={6} md={8}>
                {/* Showing pokemon stats */}
                {pokemon.stats.map((el, key) => {
                  return (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item action variant="dark" key={key}>
                        {el.stat.name}
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </Col>
              <Col xs={6} md={4}>
                {/* Showing Pokemon stadistics */}
                {pokemon.stats.map((el, key) => {
                  return (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item action variant="danger">
                        {el.base_stat}%
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={6}>
                <img
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                ></img>
              </Col>
              <Col xs={6} md={6}>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4}>
                <h4>Abilities</h4>
                {/* Showing Pokemons abilitites */}
                {pokemon.abilities.map((el, key) => {
                  return (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item action variant="success">
                        {el.ability.name}
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </Col>
              <Col xs={4} md={4}>
                <h4>Base Experience</h4>
                {/* Showing Pokemons base experience */}
                <ListGroup variant="flush">
                  <ListGroup.Item action variant="success">
                    {pokemon.base_experience}%
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={4} md={4}>
                <h4>Weight</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item action variant="success">
                        {pokemon.weight} pounds
                    </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
