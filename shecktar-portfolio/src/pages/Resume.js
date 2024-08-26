import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaFilePdf, FaEye } from 'react-icons/fa';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ResumeSection = styled.div`
  background: linear-gradient(135deg, #1b1a2e, #2c5364);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 15s ease infinite;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const AnimatedButton = styled(motion(Button))`
  font-size: 1.2em;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #2c5364;
  border: none;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1b1a2e;
  }
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const Resume = () => {
  return (
    <ResumeSection>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 style={{ color: '#fff', marginBottom: '30px' }}>My Resume</h1>
            <IframeContainer>
              <iframe
                src="https://drive.google.com/file/d/1Y0JuVzGBozIlifQT3GkWA5lLGbALYqWt/preview"
                width="100%"
                height="100%"
                allow="autoplay"
              ></iframe>
            </IframeContainer>
            <ButtonContainer>
              <AnimatedButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://drive.google.com/uc?export=download&id=1Y0JuVzGBozIlifQT3GkWA5lLGbALYqWt"
              >
                <FaFilePdf /> Download Resume
              </AnimatedButton>
            </ButtonContainer>
          </Col>
        </Row>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
