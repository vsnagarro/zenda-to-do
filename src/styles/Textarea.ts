import styled from "styled-components";
import colors from "./colors";

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid ${colors.textAreaBorder};
  border-radius: 4px;
  padding: 12px;
  resize: none;
  background: ${colors.textAreaBackground};
  color: ${colors.textAreaColor};
  font-family: "TWK Lausanne", sans-serif;
  font-size: 16px;
  font-weight: 200;

  &:focus {
    outline: none;
    background: ${colors.textAreaEditingBackground};
    border: 1px solid ${colors.textAreaEditingBorder};
  }
`;

export default TextArea;
