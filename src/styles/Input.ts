import styled from "styled-components";
import colors from "./colors";

const Input = styled.input`
  width: 300px;
  height: 32px;
  border: 1px solid ${colors.searchBarBorder};
  background: ${colors.searchBarBackground};
  color: ${colors.searchBarText};
  border-radius: 2px;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  font-family: "TWK Lausanne", sans-serif;
  font-size: 16px;
  font-weight: 200;
  &:focus,
  &:hover {
    outline: none;
    color: ${colors.searchBarTextActive};
    background: ${colors.searchBarBackgroundActive};
    border-color: ${colors.searchBarBorderActive};
  }
  &::placeholder {
    color: ${colors.searchBarText};
  }
`;

export default Input;
