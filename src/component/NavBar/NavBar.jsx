import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="main-nav">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <BsFillCameraReelsFill color="white" fontSize={40} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link className="populer-movies">
                <Link to="/">Populer Movies</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar" style={{ justifyContent: "end" }}>
            <Nav>
          <Link
            className="btn"
            style={{
              textDecoration: "none",
              color: "brown",
              border: "2px solid white",
            }}
            to="/search-movie"
          >
            Search Movies{" "}
            <AiOutlineSearch
              fontSize={40}
              style={{ marginRight: "0.1rem" }}
            />
            
          </Link>
        </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
