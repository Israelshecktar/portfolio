import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import Header from "../components/Header";

// Background animation
const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Home section styling with vibrant gradient
const HomeSection = styled.div`
  background: linear-gradient(135deg, #7f5a83, #0d324d);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 12s ease infinite;
  padding: 40px 0;
  min-height: 90vh;
  display: flex;
  align-items: center;
`;

// Description styling
const HomeDescription = styled(motion.div)`
  font-size: 1.5em;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  line-height: 1.6;
`;

// Image styling for responsive design
const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 250px;
  height: 250px;
  background: url("/coding.png") no-repeat center center;
  background-size: cover;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    height: auto;
  }
`;

// Section styling with gradient background
const GradientSection = styled(motion.div)`
  background: linear-gradient(135deg, #7f5a83, #0d324d);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 12s ease infinite;
  padding: 60px 0;
  color: #fff;

  &:hover {
    background-position: 100% 50%;
  }
`;

// Section title
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  color: #f0f0f0;
`;

// Experience card with hover effects
const ExperienceCard = styled(motion.div)`
  background: #3b6978;
  border-radius: 15px;
  padding: 20px;
  margin: 15px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, background 0.3s;

  &:hover {
    transform: translateY(-10px);
    background: #204051;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-weight: 600;
  }
`;

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      {/* Home Section */}
      <HomeSection id="home">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <HomeDescription
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={[
                    "As a Full Stack Software Engineer, I excel in designing scalable web applications using React.js, Next.js, Node.js, and more.",
                    "Creating seamless user experiences is my passion, and I strive to continuously improve and innovate.",
                    "Whether it's architecting complex systems or optimizing performance, I love taking on new challenges!"
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </HomeDescription>
            </Col>
            <Col md={4}>
              <ImageContainer />
            </Col>
          </Row>
        </Container>
      </HomeSection>

      {/* Experience Section with gradient */}
      <GradientSection id="experience">
        <Container>
          <SectionTitle>Experience</SectionTitle>
          <Row>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Software Engineer at Alx_Africa</h3>
                <p>Developed and maintained web applications using React.js and Node.js.</p>
              </ExperienceCard>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Software Engineering Intern at Codsoft</h3>
                <p>Developed and maintained web applications using React.js and Node.js.</p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>IT Specialist at Chemical and Allied Product PLC</h3>
                <p>Implemented RESTful APIs and microservices using Flask and Django.</p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Team Lead Software Engineer at HouseHunt Startup</h3>
                <p>Worked on full stack development projects, integrating front-end and back-end technologies.</p>
              </ExperienceCard>
            </Col>
          </Row>
        </Container>
      </GradientSection>

      {/* Achievements Section with gradient */}
      <GradientSection id="achievements">
        <Container>
          <SectionTitle>Achievements</SectionTitle>
          <Row>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Best Developer Award 2023</h3>
                <p>Received the Best Developer Award for outstanding performance in 2023.</p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>AWS Certified Solutions Architect</h3>
                <p>Earned AWS Solutions Architect certification, showcasing cloud expertise.</p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Research Publication</h3>
                <p>Published a research paper on microservices architecture.</p>
              </ExperienceCard>
            </Col>
          </Row>
        </Container>
      </GradientSection>
    </>
  );
}
