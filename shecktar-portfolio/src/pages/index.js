import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import Header from "../components/Header";

// A subtler background animation (slow shift)
const backgroundShift = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

// Use a polished, darker gradient for the main section
const HomeSection = styled.div`
  background: linear-gradient(135deg, #141E30, #243B55);
  background-size: 400% 400%;
  animation: ${backgroundShift} 15s ease infinite;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
  color: #ffffff;
`;

// Refine the description with subtle text styling
const HomeDescription = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e6e6e6;
  max-width: 700px;
`;

// Container for the image to ensure it’s well-proportioned
const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  background: url("/coding.png") no-repeat center center;
  background-size: cover;
  margin-left: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    height: auto;
  }
`;

const StyledSection = styled.section`
  background: linear-gradient(135deg, #141E30, #243B55);
  background-size: 400% 400%;
  animation: ${backgroundShift} 15s ease infinite;
  color: #ffffff;
  padding: 60px 0;
  position: relative;

  /* Subtle hover effect */
  &:hover {
    background-position: 100% 100%;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
  color: #f2f2f2;
  letter-spacing: 1px;
`;

// A more refined card with subtle shadows and rounding
const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out, background 0.3s;

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    color: #cccccc;
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.08);
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
            <Col md={7}>
              <HomeDescription
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={[
                    "As a Full Stack Software Engineer, I excel in designing scalable web applications using React.js, Next.js, Node.js, and more.",
                    "Creating seamless user experiences is my passion, and I strive to continuously improve and innovate.",
                    "Whether it's architecting complex systems or optimizing performance, I love taking on new challenges!",
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
            <Col md={5} className="text-md-end text-center">
              <ImageContainer />
            </Col>
          </Row>
        </Container>
      </HomeSection>

      {/* Experience Section */}
      <StyledSection id="experience">
        <Container>
          <SectionTitle>Experience</SectionTitle>
          <Row>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Software Engineer at Alx_Africa</h3>
                <p>
                  Developed and maintained web applications using React.js and
                  Node.js.
                </p>
              </ExperienceCard>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Software Engineering Intern at Codsoft</h3>
                <p>
                  Developed and maintained web applications using React.js and
                  Node.js.
                </p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>IT Specialist at Chemical and Allied Product PLC</h3>
                <p>
                  Implemented RESTful APIs and microservices using Flask and
                  Django.
                </p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Team Lead Software Engineer at HouseHunt Startup</h3>
                <p>
                  Worked on full stack development projects, integrating
                  front-end and back-end technologies.
                </p>
              </ExperienceCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      {/* Achievements Section */}
      <StyledSection id="achievements">
        <Container>
          <SectionTitle>Achievements</SectionTitle>
          <Row>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Best Developer Award 2023</h3>
                <p>
                  Received the Best Developer Award for outstanding performance
                  in 2023.
                </p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>AWS Certified Solutions Architect</h3>
                <p>
                  Earned AWS Solutions Architect certification, showcasing cloud
                  expertise.
                </p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Research Publication</h3>
                <p>
                  Published a research paper on microservices architecture.
                </p>
              </ExperienceCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  );
}
