import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: inline-block;
  margin: 0 10px;
  font-size: 1.2em;
  color: #0f0;
`;

const Skills = () => (
  <SkillsContainer id="skills">
    <h2>Technical Skills</h2>
    <SkillsList>
      <SkillItem>C</SkillItem>
      <SkillItem>Python</SkillItem>
      <SkillItem>JavaScript</SkillItem>
      <SkillItem>HTML</SkillItem>
    </SkillsList>
  </SkillsContainer>
);

export default Skills;

