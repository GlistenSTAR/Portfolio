import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: '400px', width: 'auto' }} />
            <p style={{ color: "rgb(155 126 172)", fontSize:'22px' }}>
              "Inhale confidence, exhale doubt."{" "}
            </p>
            <p style={{ color: "rgb(155 126 172)",  marginTop: '20px', fontSize:'22px' }}>
              "Speak less, Work more!"{" "}
            </p>
            <footer className="blockquote-footer" align="right">Marko's Motto</footer>
          </Col>
        </Row>
        <Github />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <h2 style={{ textAlign: 'left' }}> - Frontend</h2>
        <Techstack method="front" />

        <h2 style={{ textAlign: 'left' }}> - Backend</h2>
        <Techstack method="backend" />

        <h2 style={{ textAlign: 'left' }}> - Database</h2>
        <Techstack method="db" />

        <h2 style={{ textAlign: 'left' }}> - Mobile</h2>
        <Techstack method="mobile" />

        <h2 style={{ textAlign: 'left' }}> - Ecommerce</h2>
        <Techstack method="ecommerce" />

        <h2 style={{ textAlign: 'left' }}> - Special</h2>
        <Techstack method="special" />

      </Container>
    </Container>
  );
}

export default About;
