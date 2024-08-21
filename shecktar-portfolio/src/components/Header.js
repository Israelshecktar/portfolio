import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Type from './Type'; // Import Type component
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import myImg from '../assets/images/my_img.JPG'; // Ensure this path is correct

const HeaderContainer = styled.header`
  text-align: center;
  padding: 100px 0;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 50px 0;
    height: auto;
  }
`;

const ProfileImage = styled.img`
  border-radius: 15px; /* Adjust the value to get the desired roundness */
  width: 400px;
  height: 600px;
  margin-bottom: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeaderText = styled.div`
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <HeaderContent>
        <Col md={5} style={{ paddingBottom: 20 }}>
          <Zoom>
            <ProfileImage src={myImg} alt="Shecktar" className="img-fluid" />
          </Zoom>
        </Col>
        <HeaderText>
          <Fade left>
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> SHECKTAR</strong>
            </h1>
            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Fade>
        </HeaderText>
      </HeaderContent>
    </Container>
  </HeaderContainer>
);

export default Header;
