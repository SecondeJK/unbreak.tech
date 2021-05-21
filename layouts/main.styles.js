import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=Roboto:wght@400&display=swap");

  :root {
    --black: #0f111a;
    --white: #ffffff;

    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-family-heading: "Syncopate", sans-serif;
    --font-family-main: "Roboto", sans-serif;

    --wrapper-max-width: 1080px;
    --readable-text-width: 48rem;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: var(--font-family-main);
    font-size: 1rem;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
