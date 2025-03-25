import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${fonts} 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1{
    font-size: 2rem;
    font-weight: 400;
  }
  body {
    font-family: 'TWK Lausanne', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.375;
    background: linear-gradient(90deg, ${colors.backgroundGradientStart} 0%, ${colors.backgroundGradientEnd} 100%);
    color: ${colors.textPrimary};
  }
`;

export default GlobalStyles;
