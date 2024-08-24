import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPython, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import Header from '../components/Header'; // Import the Header component

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

const HomeDescription = styled(motion.p)`
  text-align: justify;
  font-size: 1.2em;
  color: #fff;
`;

const SkillsTitle = styled(motion.h2)`
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

const SkillItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  color: #fff;
  font-size: 1.2em;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #0f0; /* Green color */
  }

  svg {
    font-size: 3em;
    margin-bottom: 10px;
    transition: transform 0.3s;

    &:hover {
      transform: rotate(20deg);
    }
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

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header /> {/* Ensure the Header component is the first section */}
      <HomeSection id="home">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="home-content">
              <HomeDescription
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={[
                    "As a dedicated Full Stack Software Engineer, I excel in designing and developing robust, scalable web applications. My expertise spans across front-end and back-end technologies, including React.js, Next.js, Node.js, Flask, and Django. I am passionate about creating seamless user experiences and efficient server-side logic. My journey in software engineering is driven by a commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy contributing to open source projects. Whether it's architecting complex systems or optimizing performance, I am always eager to tackle new challenges and leverage cutting-edge technologies to deliver impactful solutions."
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={10000}
                />
              </HomeDescription>
            </Col>
          </Row>
          <Row className="home-skills">
            <Col md={12}>
              <SkillsTitle
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                My Skills
              </SkillsTitle>
              <SkillsList className="skills-list">
                <SkillItem
                  className="skills-item"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <FaPython /> Python
                  <ProgressBarContainer>
                    <ProgressBar width="90%" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem
                  className="skills-item"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <FaJs /> JavaScript
                  <ProgressBarContainer>
                    <ProgressBar width="85%" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem
                  className="skills-item"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <FaReact /> React.js
                  <ProgressBarContainer>
                    <ProgressBar width="80%" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem
                  className="skills-item"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <FaNodeJs /> Node.js
                  <ProgressBarContainer>
                    <ProgressBar width="75%" />
                  </ProgressBarContainer>
                </SkillItem>
              </SkillsList>
            </Col>
          </Row>
        </Container>
      </HomeSection>
    </>
  );
}
