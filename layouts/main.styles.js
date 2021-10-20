import css from "styled-jsx/css";

export default css.global`
  :root {
    --black: #0f111a;
    --white: #ffffff;
    --gray: #c9cacc;
    --gray-dark: #595959;
    --red: #ff4e56;

    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-family-heading: "Fira sans", sans-serif;
    --font-family-main: "Fira sans", sans-serif;

    --wrapper-max-width: 1440px;
    --readable-text-width: 48rem;
    --form-max-width: 48rem;

    --header-outer-height: 50px;
    --header-inner-height: 50px;
    --header-height-difference: calc(var(--header-outer-height) - var(--header-inner-height));

    --hamburger_padding-x: 16px;
    --hamburger_padding-y: 16px;
    --hamburger_layer-width: 32px;
    --hamburger_layer-height: 4px;
    --hamburger_layer-spacing: 6px;
    --hamburger_layer-color: var(--red);
    --hamburger_layer-border-radius: 1px;
    --hamburger_hover-opacity: 0.9;
    --hamburger_active-hover-opacity: var(--hamburger_hover-opacity);

    --box-shadow-default: rgba(0, 0, 0, 0.2) 0 0.25rem 0.25rem;
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
