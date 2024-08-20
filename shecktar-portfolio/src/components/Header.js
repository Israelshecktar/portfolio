import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import homeLogo from '../assets/images/home-main.svg'; // Ensure this path is correct
import Type from './Type'; // Import Type component

const HeaderContainer = styled.header`
  text-align: center;
  padding: 50px;
  background: var(--image-gradient), url('/path/to/your/background-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <Row>
        <Col md={7}>
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
        </Col>
        <Col md={5} style={{ paddingBottom: 20 }}>
          <ProfileImage src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
        </Col>
      </Row>
    </Container>
  </HeaderContainer>
);

export default Header;
