import { React, useState } from "react";
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

const RegisterPage = () => {
  let baseurl = process.env.REACT_APP_BASEURL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(baseurl + "/auth/");
    fetch(baseurl + "/auth/", {
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
        console.log(res.password);
        localStorage.setItem("Token", res.password);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <Container className="w-50">
      <Row className="justify-content-center">
        <Form>
          <Form.Group
            onChange={(e) => setUsername(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Valitse käyttäjänimesi</Form.Label>
            <Form.Control type="email" placeholder="" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Salasana</Form.Label>
            <Form.Control type="password" placeholder="" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Salasana uudelleen</Form.Label>
            <Form.Control type="password" placeholder="" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button onClick={() => login()} className="w-100">
            Rekisteröidy
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default RegisterPage;
