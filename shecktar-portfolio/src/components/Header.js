import React from "react";
import { Container, Col } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import Type from "./Type"; // Ensure you have this component or create it

// Animated gradient for overlay
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderContainer = styled.header`
  /* Keep your background image */
  background: url("/my_img.jpg") no-repeat center top;
  background-size: cover;
  background-attachment: fixed; /* Parallax effect on large screens */
  background-position: center 10%;
  position: relative;
  overflow: hidden;

  min-height: 100vh; /* Ensures the header spans full viewport height */
  display: flex;
  align-items: center;
  color: #fff;
  text-align: left;
  padding-left: 50px;

  &::before {
    /* Dark overlay with animated gradient */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );
    background-size: 200% 200%;
    animation: ${gradientAnimation} 15s ease infinite;
    z-index: 1;
  }

  /* Adjust for smaller screens */
  @media (max-width: 768px) {
    padding-left: 20px;
    background-position: center 30%;
    background-attachment: scroll; /* Disable parallax on mobile for performance */
    justify-content: center;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2; /* Content is above overlay */
  max-width: 800px;
  margin-left: auto;
  padding: 20px;
  text-align: right;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center; /* Center text on smaller screens */
  }
`;

const Heading = styled(motion.h1)`
  font-family: "Poppins", sans-serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled(motion.h2)`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  strong {
    color: #fff; /* Emphasize 'SHECKTAR' in white */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TypeContainer = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1.5rem;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialIcons = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end; /* Align icons to the right */

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #0f0; /* Green hover color */
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <Col>
        <HeaderContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
              transition={{ duration: 1, delay: 0.3 }}
            >
              I am <strong className="main-name">SHECKTAR</strong>
            </SubHeading>
            <TypeContainer
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Type />
            </TypeContainer>
            <SocialIcons
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <a
                href="https://twitter.com/shecktar5"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/israel-ewedairo-439bb5240"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Israelshecktar"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://medium.com/@shecktar"
                aria-label="Medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium />
              </a>
            </SocialIcons>
          </motion.div>
        </HeaderContent>
      </Col>
    </Container>
  </HeaderContainer>
);

export default Header;
