import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaMicrosoft, FaGithub, FaLinux, FaGit, FaDatabase, FaHtml5, FaCss3Alt, FaCuttlefish } from 'react-icons/fa';
import { SiFlask, SiDjango, SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, SiRedis, SiNginx, SiPuppet, SiAzuredevops } from 'react-icons/si';
import { motion } from 'framer-motion';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SkillsSection = styled.div`
  background: linear-gradient(135deg, #1b1a2e, #2c5364);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 15s ease infinite;
  padding: 50px 0;
  min-height: 100vh;
`;

const SkillsTitle = styled(motion.h2)`
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
`;

const SkillCategory = styled.div`
  margin-bottom: 50px;
`;

const SkillCategoryTitle = styled.h3`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  background: #2c5364;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 150px;
  text-align: center;
  color: #fff;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #1b1a2e;
  }

  svg {
    font-size: 3em;
    margin-bottom: 10px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: ${props => props.color};
  width: ${props => props.width};
`;

const Skills = () => {
  return (
    <SkillsSection>
      <Container>
        <Row>
          <Col md={12}>
            <SkillsTitle
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              My Skills
            </SkillsTitle>

            {/* Software Architecture */}
            <SkillCategory>
              <SkillCategoryTitle>Software Architecture</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://en.wikipedia.org/wiki/Multitier_architecture" target="_blank" rel="noopener noreferrer">Layered (N-tier) Architecture</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://microservices.io/" target="_blank" rel="noopener noreferrer">Microservices Architecture</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://en.wikipedia.org/wiki/Client%E2%80%93server_model" target="_blank" rel="noopener noreferrer">Client-Server Architecture</a>
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>

            {/* DevOps */}
            <SkillCategory>
              <SkillCategoryTitle>DevOps</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://aws.amazon.com/devops/what-is-devsecops/" target="_blank" rel="noopener noreferrer">DevSecOps</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://github.com/features/devcontainers" target="_blank" rel="noopener noreferrer"><FaGithub color="#181717" /> GitOps</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer"><FaLinux color="#FCC624" /> Linux</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.ubuntu.com/" target="_blank" rel="noopener noreferrer"><FaLinux color="#E95420" /> Ubuntu</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.unix.com/" target="_blank" rel="noopener noreferrer"><FaLinux color="#0071C5" /> Unix</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><FaDocker color="#2496ED" /> Docker</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://puppet.com/" target="_blank" rel="noopener noreferrer"><SiPuppet color="#FFAE1A" /> Puppet</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer"><FaLinux color="#4EAA25" /> Shell Scripting</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer"><SiNginx color="#009639" /> Nginx</a>
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>

            {/* Cloud Computing */}
            <SkillCategory>
              <SkillCategoryTitle>Cloud Computing</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><FaAws color="#FF9900" /> AWS</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer"><FaMicrosoft color="#0078D4" /> Microsoft Azure</a>
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>

            {/* Programming Languages */}
            <SkillCategory>
              <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><FaPython color="#3776AB" /></a> Python
                  <ProgressBarContainer>
                    <ProgressBar width="70%" color="#3776AB" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><FaJs color="#F7DF1E" /></a> JavaScript
                  <ProgressBarContainer>
                    <ProgressBar width="60%" color="#F7DF1E" />
                  </ProgressBarContainer>
                </SkillItem>
                <SkillItem>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><FaHtml5 color="#E34F26" /></a> HTML5
                </SkillItem>
                <SkillItem>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><FaCss3Alt color="#1572B6" /></a> CSS3
                </SkillItem>
                <SkillItem>
                  <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer"><FaCuttlefish color="#A8B9CC" /></a> C
                </SkillItem>
                <SkillItem>
                  <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaNodeJs color="#339933" /></a> Node.js
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>

            {/* Frameworks */}
            <SkillCategory>
              <SkillCategoryTitle>Frameworks</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer"><SiFlask color="#000000" /></a> Flask
                </SkillItem>
                <SkillItem>
                  <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer"><SiDjango color="#092E20" /></a> Django
                </SkillItem>
                <SkillItem>
                  <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">Django Rest Framework</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact color="#61DAFB" /></a> React.js
                </SkillItem>
                <SkillItem>
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><SiNextdotjs color="#000000" /></a> Next.js
                </SkillItem>
                <SkillItem>
                  <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><SiTypescript color="#3178C6" /></a> TypeScript
                </SkillItem>
                <SkillItem>
                  <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">RESTful API</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://www.soapui.org/learn/api/soap-api/" target="_blank" rel="noopener noreferrer">SOAP API Architecture</a>
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>

            {/* IT Related Skills */}
            <SkillCategory>
              <SkillCategoryTitle>IT Related Skills</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://en.wikipedia.org/wiki/Networking" target="_blank" rel="noopener noreferrer">Networking</a>
                </SkillItem>
                <SkillItem>
                  <a href="https://en.wikipedia.org/wiki/System_administration" target="_blank" rel="noopener noreferrer">System Administration</a>
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>

            {/* Databases */}
            <SkillCategory>
              <SkillCategoryTitle>Databases</SkillCategoryTitle>
              <SkillsGrid>
                <SkillItem>
                  <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><FaDatabase color="#4479A1" /></a> MySQL
                </SkillItem>
                <SkillItem>
                  <a href="https://redis.io/" target="_blank" rel="noopener noreferrer"><SiRedis color="#DC382D" /></a> Redis
                </SkillItem>
                <SkillItem>
                  <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><SiPostgresql color="#336791" /></a> PostgreSQL
                </SkillItem>
                <SkillItem>
                  <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><SiMongodb color="#47A248" /></a> MongoDB
                </SkillItem>
              </SkillsGrid>
            </SkillCategory>
          </Col>
        </Row>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
