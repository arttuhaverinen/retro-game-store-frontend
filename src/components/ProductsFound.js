import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
export const ProductsFound = () => {
  let dummyResults = ["abc", "123", "asd"];
  //let baseurl = "http://localhost:8000";
  let baseurl = "https://retro-game-store-4beeba909987.herokuapp.com";

  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log("fetching products");
    let products = fetch(baseurl + "/products/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col>Hakutuloksia: {dummyResults.length}</Col>
        <Col>Hintajärjestys</Col>
        <Col>Aikajärjestys</Col>
        <Col>Suosituin</Col>
      </Row>
      <hr></hr>

      {products == null
        ? null
        : products.map((product) => {
            return (
              <SingleProduct
                name={product.name}
                description={product.description}
                price={product.price}
                location={product.location}
                image={product.image}
              />
            );
          })}
      {dummyResults.map((elem) => {
        return (
          <Row>
            <Col xs={3}>kuva</Col>
            <Col xs={3}>{elem}</Col>
            <Col xs={6}>Joensuu</Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default ProductsFound;
