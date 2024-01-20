import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import dice0 from "./images/Wii.png";

const Navigation = () => {
	return (
		<Navbar expand="lg" className="bg-success mb-3">
			<Container className="">
				<Navbar.Brand>
					{" "}
					<Nav.Link>
						<Link className="links" to={"/retrostore"}>
							Koti
						</Link>
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto" style={{ margin: "auto" }}>
						<Nav.Link>
							<Link className="links" to={"/addProduct"}>
								Lisää ilmoitus
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className="links" to={"/settings"}>
								Asetukset
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className="links" to={"/OwnProducts"}>
								Omat ilmoitukset
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className="links" to={"/login"}>
								Kirjautuminen
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className="links" to={"/register"}>
								Rekisteröinti
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Navigation;
