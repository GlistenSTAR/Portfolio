import React from "react";
import { Col, Row } from "react-bootstrap";
import topRated from '../../Assets/topRated.png'

import {
  DiAngularSimple,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiPhp,
  DiGo,
  DiRust,
} from "react-icons/di";
import {
  SiNuxtdotjs,
  SiNextdotjs,
  SiNestjs,
  SiSvelte,
  SiVuedotjs,
  SiLaravel,
  SiBootstrap,
  SiEmberdotjs,
  SiDjango,
  SiSolidity
} from "react-icons/si";

function Techstack(props) {
  console.log(props)
  return (
    <>
      {
        props.method == "front" ? (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSvelte />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVuedotjs />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiAngularSimple />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiBootstrap />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNuxtdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNestjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiLaravel />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiEmberdotjs />
          </Col>
        </Row>) : (
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
              <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiPython />
              <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiPhp />
              <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGo />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiRust />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiSolidity />
              <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiDjango />
              <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiLaravel />
              <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
            </Col>
          </Row>
        )
      }
      {props.method === "special" ? (
        <Col xs={4} md={2} className="tech-icons">
          <SiLaravel />
          <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
        </Col>
      ) : (
        <Col xs={4} md={2} className="tech-icons">
          <SiLaravel />
          <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
        </Col>
      )}
    </>
  );
}

export default Techstack;
