import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const About = () => (
  <AboutContainer id="about">
    <h2>About Me</h2>
    <p>As a software engineer, I am constantly learning and growing my skills in various programming languages such as C, Python, JavaScript, and HTML. My passion for engineering impactful software drives my commitment to creating efficient and innovative solutions. Additionally, I have a strong interest in open source projects and technical writing. For a more detailed overview of my work and contributions, you can visit my <a href="https://github.com/Israelshecktar">Github profile</a>, where you can find a variety of projects and code repositories that showcase my expertise and experience.</p>
    <img src="my_img.png" alt="A photo of Shecktar, a full-stack software engineer" width="600px" height="400px" />
  </AboutContainer>
);

export default About;

