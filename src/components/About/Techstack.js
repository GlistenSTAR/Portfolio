import React from "react";
import { Col, Row } from "react-bootstrap";
import topRated from '../../Assets/topRated.png'

import {
  DiAngularSimple,
  DiReact,
  DiNodejs,
  DiPython,
  DiPhp,
  DiGo,
  DiRust,
  DiMongodb,
  DiPostgresql,
  DiSqllite,
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
  SiSolidity,
  SiMysql,
  SiOracle,
  SiFirebase,
  SiFlutter,
  SiShopify,
  SiMagento,
  SiWoocommerce,
  SiWebrtc,
  SiPaypal,
  SiStrapi
} from "react-icons/si";



const Techstack = (props) => {
  const TechComponet = () => {
    if (props.method === "front") {
      return (
        <Row style={{ paddingBottom: "50px" }}>
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
        </Row>
      )
    } else if (props.method === "backend") {
      return (
        < Row style={{ paddingBottom: "50px" }}>
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
    } else if (props.method === "db") {
      return (
        < Row style={{ paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiPostgresql />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiOracle />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiSqllite />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
        </Row>
      )
    } else if (props.method === "mobile") {
      return (
        < Row style={{ paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFlutter />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
        </Row>
      )
    } else if (props.method === "ecommerce") {
      return (
        < Row style={{ paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiShopify />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMagento />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiWoocommerce />
          </Col>
        </Row>
      )
    } else if (props.method === "special") {
      return (
        < Row style={{ paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiWebrtc />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPaypal />
            <img src={topRated} className="top_rated" width={50} height={60} alt="top" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiStrapi />
          </Col>
        </Row>
      )
    }

  }

  return (
    <>
      {
        props.method ? (
          <TechComponet />
        ) : null
      }
    </>
  );
}

export default Techstack;
