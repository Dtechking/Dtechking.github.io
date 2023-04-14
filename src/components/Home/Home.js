import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import DisplacementSphere from './DisplacementSphere';
import { TextDecrypt, TextDecryptbold } from "./TextDecrypt";
import { Delayed } from "./Delayed";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Delayed>
          <DisplacementSphere />
        </Delayed>
        <Container className="home-content">
          <Row>
            <Col md={6} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <div style={{ float: "left", clear: "none" }}>
                  <TextDecrypt text={`Hi There!  `} />
                </div>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <pre></pre>
                <Delayed waitBeforeShow="1500">
                  <div style={{ float: "left", clear: "none" }}>
                    <TextDecrypt text={`I'm `} />
                  </div>
                  <TextDecryptbold text={`DARSHAN`} />
                </Delayed>
              </h1>

              <div style={{ paddingLeft: 49, textAlign: "left" }}>
                <Delayed waitBeforeShow="2000">
                  <Type />
                </Delayed>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
