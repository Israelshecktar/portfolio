import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.jpg'; // Ensure this path is correct

const GlobalStyles = createGlobalStyle`
  html {
    --section-background-color: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.582),
      rgba(12, 8, 24, 0.904)
    );

    --image-gradient: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.678),
      rgba(12, 10, 22, 0.863)
    );

    --imp-text-color: #0f0; /* Green color */
  }

  body {
    font-family: 'Inter', sans-serif; /* Updated font */
    margin: 0;
    padding: 0;
    background: var(--section-background-color), url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--imp-text-color);
  }

  a {
    color: var(--imp-text-color);
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #fff;
  }

  .green {
    color: var(--imp-text-color) !important;
  }

  button:focus {
    box-shadow: none !important;
  }

  .home-section {
    background: var(--section-background-color);
    color: #fff;
    padding: 50px 0;
  }

  .home-title {
    font-size: 3em;
    margin-bottom: 20px;
  }

  .highlight {
    color: #6c63ff;
  }

  .typewriter {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  .home-description {
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  .home-image img {
    max-width: 100%;
    border-radius: 50%;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .home-skills {
    margin-top: 50px;
    text-align: center;
  }

  .skills-title {
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  .skills-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .skills-item {
    margin: 10px 20px;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .skills-item svg {
    margin-right: 10px;
  }
`;

export default GlobalStyles;
