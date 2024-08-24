import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
  return (
    <Typewriter
      words={[
        "Software Engineer",
        "Backend Specialist",
        "Technical Writter",
        "Full Stack Developer",
        "Open Source Contributor",
        "Tech Blogger"
      ]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default Type;
