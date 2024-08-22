import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Type from './Type'; // Import Type component
import Fade from 'react-reveal/Fade';
import myImg from '../assets/images/my_img.JPG'; // Ensure this path is correct

const HeaderContainer = styled.header`
  background: url(${myImg}) no-repeat center top;
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

  /* Adjust the background position to crop a bit from the top */
  background-position: center 10%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 20px;
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

const Heading = styled.h1`
  font-size: 4em;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif; /* Apply the new font */

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const SubHeading = styled.h2`
  font-size: 3em;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif; /* Apply the new font */

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const TypeContainer = styled.div`
  padding: 20px;
  text-align: right; /* Align text to the right */
  font-family: 'Poppins', sans-serif; /* Apply the new font */

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center; /* Center text on smaller screens */
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <Col>
        <HeaderContent>
          <Fade bottom>
            <Heading>
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </Heading>
            <SubHeading>
              I'M
              <strong className="main-name"> SHECKTAR</strong>
            </SubHeading>
            <TypeContainer>
              <Type />
            </TypeContainer>
          </Fade>
        </HeaderContent>
      </Col>
    </Container>
  </HeaderContainer>
);

export default Header;
