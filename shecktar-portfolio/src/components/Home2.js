import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPython, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Home2() {
  return (
    <Container fluid className="home-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="home-content">
            <Fade bottom>
              <p className="home-description">
                As a dedicated Full Stack Software Engineer, I excel in designing and developing robust, scalable web applications. My expertise spans across front-end and back-end technologies, including React.js, Next.js, Node.js, Flask, and Django. I am passionate about creating seamless user experiences and efficient server-side logic. My journey in software engineering is driven by a commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy contributing to open source projects. Whether it's architecting complex systems or optimizing performance, I am always eager to tackle new challenges and leverage cutting-edge technologies to deliver impactful solutions.
              </p>
            </Fade>
          </Col>
        </Row>
        <Row className="home-skills">
          <Col md={12}>
            <Slide bottom>
              <h2 className="skills-title">My Skills</h2>
              <ul className="skills-list">
                <li className="skills-item">
                  <FaPython /> Python
                </li>
                <li className="skills-item">
                  <FaJs /> JavaScript
                </li>
                <li className="skills-item">
                  <FaReact /> React.js
                </li>
                <li className="skills-item">
                  <FaNodeJs /> Node.js
                </li>
              </ul>
            </Slide>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
