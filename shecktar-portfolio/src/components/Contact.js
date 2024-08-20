import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Contact Me</h2>
    <p>Contact: your.email@example.com</p>
  </ContactContainer>
);

export default Contact;

