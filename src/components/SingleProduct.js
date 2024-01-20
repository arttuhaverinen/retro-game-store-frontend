import React, { useState } from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";

const SingleProduct = ({
  name,
  description,
  price,
  location,
  image,
  console,
  consoleFilter,
  owner,
}) => {
  const [filterByConsole, setFilterByConsole] = useState(false);

  const checkFilters = () => {
    if (consoleFilter != null) {
      setFilterByConsole(true);
    }
  };

  return (
    <div className="mb-4">
      <Row className="">
        <Col className="g-0 m-0 p-0" xs={4} md={2}>
          <Image
            fluid
            style={{
              height: "250px",
              width: "250px",
              margin: "0px",
              padding: "0px",
            }}
            src={
              image
                ? image
                : "https://firebasestorage.googleapis.com/v0/b/retrostore-ac1ea.appspot.com/o/175-1.jpg?alt=media&token=80ec7c28-ba51-4e82-b163-9036ea33aef6"
            }
          ></Image>
        </Col>
        <Col
          xs={8}
          md={10}
          className="justify-content-between"
          style={{ backgroundColor: "#018749" }}
        >
          <Row className="h-100 p-1 ">
            <Row className="h-25">
              <Col xs={10} md={10} className="p-0">
                <h3 className="p-0 m-0">{name}</h3>
              </Col>
              <Col xs={2} md={2}>
                <h3>{console.toUpperCase()}</h3>
              </Col>
            </Row>
            <Row
              className="h-50 align-middle w-75"
              style={{ overflow: "hidden" }}
            >
              {description}
            </Row>
            <Row className="h-25 justify-content-between">
              <Col className="p-0" xs={2} md={1}>
                <h3> {price + "€"}</h3>
              </Col>
              <Col className="p-0 text-center" xs={7} md={5}>
                {owner ? <h5>{owner}</h5> : <h5>Vieras</h5>}{" "}
              </Col>
              <Col xs={3} md={2}>
                <h5>{location}</h5>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SingleProduct;
