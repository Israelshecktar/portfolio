import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/images/my_img.png"; // Ensure this path is correct

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about programming and have experience in languages like
              <i>
                <b className="green"> C, Python, JavaScript, and HTML. </b>
              </i>
              <br />
              <br />
              My field of interest includes building new  
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Backend Development and Open Source Contributions.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Library and Frameworks
                </b>
              </i>
                like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
