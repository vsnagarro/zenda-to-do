import styled from "styled-components";
import colors from "./colors";

interface TextAreaProps {
  $isEditing?: boolean;
}

const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 100px;
  border: 1px solid ${colors.modalBorder};
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  resize: none; /* Disable resizing */
  background: ${(props) => (props.$isEditing ? colors.textAreaEditingBackground : "transparent")};
  color: white;

  &:focus {
    outline: none;
    border-color: ${colors.createButtonBackground};
  }
`;

export default TextArea;
