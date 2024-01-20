import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Dropdown,
  FormGroup,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  let baseurl = process.env.REACT_APP_BASEURL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch(baseurl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.jwt);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Container className="w-50">
      {console.log(localStorage.getItem("jwt"))}
      <Row className="justify-content-center">
        <Form>
          <Form.Group
            onChange={(e) => setUsername(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Käyttäjänimi</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Salasana</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button onClick={() => login()} className="w-100">
            Kirjaudu
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default LoginPage;
