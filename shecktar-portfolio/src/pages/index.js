import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import Header from '../components/Header';
import { NextSeo } from 'next-seo';


const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeSection = styled.div`
  background: linear-gradient(135deg, #1b1a2e, #2c5364);
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 15s ease infinite;
  padding: 20px 0;
  min-height: 100vh;
`;

const HomeDescription = styled(motion.div)`
  text-align: justify;
  font-size: 1.2em;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: -400px;
  left: 10;
  width: 400px;
  height: 300px;
  background: url('/coding.png') no-repeat center center;
  background-size: cover;
`;

const Section = styled.div`
  padding: 50px 0;
  background-color: ${props => props.bgColor || 'transparent'};
  color: ${props => props.color || '#fff'};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const ExperienceCard = styled.div`
  background: #2c5364;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  color: #fff;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #1b1a2e;
  }
`;

const AchievementCard = styled.div`
  background: #2c5364;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  color: #fff;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #1b1a2e;
  }
`;

const BlogCard = styled.div`
  background: #2c5364;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  color: #fff;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #1b1a2e;
  }
`;

const TestimonialCard = styled.div`
  background: #2c5364;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  color: #fff;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #1b1a2e;
  }
`;

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header /> {/* Ensure the Header component is the first section */}
      <HomeSection id="home">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="home-content">
              <HomeDescription
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={[
                    "As a dedicated Full Stack Software Engineer, I excel in designing and developing robust, scalable web applications. My expertise spans across front-end and back-end technologies, including React.js, Next.js, Node.js, Flask, and Django. I am passionate about creating seamless user experiences and efficient server-side logic. My journey in software engineering is driven by a commitment to continuous learning and innovation. I thrive in collaborative environments and enjoy contributing to open source projects. Whether it's architecting complex systems or optimizing performance, I am always eager to tackle new challenges and leverage cutting-edge technologies to deliver impactful solutions."
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={10000}
                /> 
                <ImageContainer />
              </HomeDescription>
            </Col>
          </Row>
        </Container>
      </HomeSection>

      {/* Experience Section */}
      <Section id="experience" bgColor="#1b1a2e">
        <Container>
          <SectionTitle>Experience</SectionTitle>
          <Row>
            <Col md={4}>
              <ExperienceCard>
                <h3>Software Engineer at Alx_Africa</h3>
                <p>Developed and maintained web applications using React.js and Node.js.</p>
              </ExperienceCard>
              <ExperienceCard>
                <h3>Software Engineering Intern at Codsoft</h3>
                <p>Developed and maintained web applications using React.js and Node.js.</p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard>
                <h3>IT Specialist at Chemical and Allied Product PLC</h3>
                <p>Implemented RESTful APIs and microservices architecture using Flask and Django.</p>
              </ExperienceCard>
            </Col>
            <Col md={4}>
              <ExperienceCard>
                <h3>Team Lead Software Engineer at HouseHunt Startup</h3>
                <p>Worked on full stack development projects, integrating front-end and back-end technologies.</p>
              </ExperienceCard>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" bgColor="#2c5364">
        <Container>
          <SectionTitle>Achievements</SectionTitle>
          <Row>
            <Col md={4}>
              <AchievementCard>
                <h3>Award 1</h3>
                <p>Received the Best Developer Award for outstanding performance in 2023.</p>
              </AchievementCard>
            </Col>
            <Col md={4}>
              <AchievementCard>
                <h3>Certification 1</h3>
                <p>Certified AWS Solutions Architect.</p>
              </AchievementCard>
            </Col>
            <Col md={4}>
              <AchievementCard>
                <h3>Achievement 3</h3>
                <p>Published a research paper on microservices architecture.</p>
              </AchievementCard>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Blog Section */}
      <Section id="blog" bgColor="#1b1a2e">
        <Container>
          <SectionTitle>Blog</SectionTitle>
          <Row>
            <Col md={4}>
              <BlogCard>
                <h3>Blog Post 1</h3>
                <p>Introduction to React Hooks.</p>
                <Button variant="primary" href="#">Read More</Button>
              </BlogCard>
            </Col>
            <Col md={4}>
              <BlogCard>
                <h3>Blog Post 2</h3>
                <p>Understanding Microservices Architecture.</p>
                <Button variant="primary" href="#">Read More</Button>
              </BlogCard>
            </Col>
            <Col md={4}>
              <BlogCard>
                <h3>Blog Post 3</h3>
                <p>Best Practices for RESTful APIs.</p>
                <Button variant="primary" href="#">Read More</Button>
              </BlogCard>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" bgColor="#2c5364">
        <Container>
          <SectionTitle>Testimonials</SectionTitle>
          <Row>
            <Col md={4}>
              <TestimonialCard>
                <p>"This is a testimonial from a colleague or client."</p>
                <p>- Person 1</p>
              </TestimonialCard>
            </Col>
            <Col md={4}>
              <TestimonialCard>
                <p>"This is another testimonial from a colleague or client."</p>
                <p>- Person 2</p>
              </TestimonialCard>
            </Col>
            <Col md={4}>
              <TestimonialCard>
                <p>"Yet another testimonial from a colleague or client."</p>
                <p>- Person 3</p>
              </TestimonialCard>
              </Col>
          </Row>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" bgColor="#1b1a2e">
        <Container>
          <SectionTitle>Contact</SectionTitle>
          <Row>
            <Col md={12}>
              <p>If you would like to get in touch, please feel free to reach out to me via email or connect with me on LinkedIn.</p>
              <Button variant="primary" href="mailto:your-email@example.com">Email Me</Button>
              <Button variant="secondary" href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</Button>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

