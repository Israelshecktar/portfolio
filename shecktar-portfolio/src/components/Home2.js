import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPython, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styled, { keyframes } from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeSection = styled.div`
  background: linear-gradient(135deg, #1b1a2e, #2c5364);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 15s ease infinite;
  padding: 50px 0;
  min-height: 100vh;
`;

const HomeDescription = styled.p`
  text-align: justify;
  font-size: 1.2em;
  color: #fff;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  color: #fff;
  font-size: 1.2em;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 3em;
    margin-bottom: 10px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: #0f0;
  width: ${props => props.width};
`;

function Home2() {
  return (
    <HomeSection id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="home-content">
            <Fade bottom>
              <HomeDescription>
                <Typewriter
                  words={[
                    "As a dedicated Full Stack Software Engineer, I excel in designing and developing robust, scalable web applications. My expertise spans across front-end and back-end technologies, including React.js, Next.js, Node.js, Flask, and Django. I am passionate about creating seamless user experiences and efficient server-side logic. My journey in software engineering is driven by a commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy contributing to open source projects. Whether it's architecting complex systems or optimizing performance, I am always eager to tackle new challenges and leverage cutting-edge technologies to deliver impactful solutions."
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={200}
                  delaySpeed={2000}
                />
              </HomeDescription>
            </Fade>
          </Col>
        </Row>
        <Row className="home-skills">
          <Col md={12}>
            <Slide bottom>
              <SkillsTitle>My Skills</SkillsTitle>
              <SkillsList className="skills-list">
                <SkillItem className="skills-item">
                  <FaPython /> Python
                  <ProgressBarContainer>
                    <ProgressBar width="90%" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem className="skills-item">
                  <FaJs /> JavaScript
                  <ProgressBarContainer>
                    <ProgressBar width="85%" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem className="skills-item">
                  <FaReact /> React.js
                  <ProgressBarContainer>
                    <ProgressBar width="80%" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem className="skills-item">
                  <FaNodeJs /> Node.js
                  <ProgressBarContainer>
                    <ProgressBar width="75%" />
                  </ProgressBarContainer>
                </SkillItem>
              </SkillsList>
            </Slide>
          </Col>
        </Row>
      </Container>
    </HomeSection>
  );
}

export default Home2;
