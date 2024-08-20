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
`;

export default GlobalStyles;
