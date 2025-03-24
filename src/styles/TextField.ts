import styled from "styled-components";
import colors from "../styles/colors";

interface TextFieldProps {
  $isEditing?: boolean; // Prop to toggle between normal and edit states
}

const TextField = styled.input<TextFieldProps>`
  width: 320px;
  height: 60px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.$isEditing ? colors.borderColorActive : colors.borderColorResting)};
  background: ${(props) => (props.$isEditing ? colors.backgroundActive : colors.backgroundResting)};
  padding: 6px 8px;
  color: ${colors.textPrimary};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${colors.borderColorActive}; /* Highlight border on focus */
  }
`;

export default TextField;
