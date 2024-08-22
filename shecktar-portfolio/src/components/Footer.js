import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1b1a2e;
  color: #fff;
  padding: 5px 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.div`
  flex: 1;
  text-align: left;
  padding: 5px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 3px;
  }
`;

const CopyrightText = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;

  @media (max-width: 768px) {
    padding: 3px;
  }
`;

const SocialIcons = styled.div`
  flex: 1;
  text-align: right;
  padding: 5px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 3px;
  }

  a {
    color: #fff;
    margin: 0 5px;
    font-size: 1.2em;
    transition: color 0.3s;

    &:hover {
      color: #0f0; /* Green color */
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterText>
        Designed and Developed by Shecktar
      </FooterText>
      <CopyrightText>
        Copyright © 2024 Shecktar
      </CopyrightText>
      <SocialIcons>
        <a href="mailto:iamshecktar1996@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://twitter.com/shecktar5" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/israel-ewedairo-439bb5240" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Israelshecktar" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://medium.com/@shecktar" aria-label="Medium" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
