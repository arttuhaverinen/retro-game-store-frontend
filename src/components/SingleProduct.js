import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const SingleProduct = ({ name, description, price, location, image }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>{name}</Col>
        <Col xs={3}>
          <Image
            m-0
            p-0
            fluid
            src={image ? image : "https://placehold.co/100x100"}
          ></Image>
        </Col>
        <Col xs={6} style={{ backgroundColor: "gray" }}>
          {description}
        </Col>
        <Col xs={2}>{price + " €"}</Col>
        <Col xs={1}>{location}</Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
