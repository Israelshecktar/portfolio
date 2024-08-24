import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import Type from './Type'; // Ensure you have this component or create it
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderContainer = styled.header`
  background: url('/my_img.jpg') no-repeat center top;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  text-align: left;
  position: relative;
  overflow: hidden;
  padding-left: 50px;
  background-attachment: fixed; /* Parallax effect */

  /* Adjust the background position to crop a bit from the bottom on mobile */
  background-position: center 10%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    background-size: 200% 200%;
    animation: ${gradientAnimation} 15s ease infinite; /* Animated gradient */
    z-index: 1;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 20px;
    background-position: center 30%; /* Crop more from the bottom */
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
  margin-left: auto; /* Move content to the right */
  text-align: right; /* Align text to the right */

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center; /* Center text on smaller screens */
  }
`;

const Heading = styled(motion.h1)`
  font-size: 4em;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif; /* Apply the new font */

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const SubHeading = styled(motion.h2)`
  font-size: 3em;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif; /* Apply the new font */

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const TypeContainer = styled(motion.div)`
  padding: 20px;
  text-align: right; /* Align text to the right */
  font-family: 'Poppins', sans-serif; /* Apply the new font */

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center; /* Center text on smaller screens */
  }
`;

const SocialIcons = styled(motion.div)`
  margin-top: 20px;
  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5em;
    transition: color 0.3s;

    &:hover {
      color: #0f0; /* Green color */
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <Col>
        <HeaderContent>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Heading
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </Heading>
            <SubHeading
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              I'M
              <strong className="main-name"> SHECKTAR</strong>
            </SubHeading>
            <TypeContainer
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Type />
            </TypeContainer>
            <SocialIcons
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <a href="https://twitter.com/shecktar5" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/israel-ewedairo-439bb5240" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Israelshecktar" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://medium.com/@shecktar" aria-label="Medium" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
            </SocialIcons>
          </motion.div>
        </HeaderContent>
      </Col>
    </Container>
  </HeaderContainer>
);

export default Header;
