import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full stack software developement",
          "DevOps Engineer",
          "Systems Administrator",
          "Open Source Contributor",
          "Technical Writer",
          "Backend Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
