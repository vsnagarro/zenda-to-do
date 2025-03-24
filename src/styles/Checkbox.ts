import styled from "styled-components";
import colors from "../styles/colors";

interface CheckboxProps {
  $isChecked?: boolean;
}

const Checkbox = styled.div<CheckboxProps>`
  width: 24px;
  height: 24px;
  border: 1px solid ${colors.checkboxBorder};
  border-radius: 2px;
  background: ${colors.checkboxBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: ${(props) => (props.$isChecked ? "block" : "none")};
    position: absolute;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid ${colors.checkboxTickWhite};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover::after {
    display: block;
    border-color: ${(props) => (props.$isChecked ? colors.checkboxTickWhite : colors.checkboxTickDark)};
  }
`;

export default Checkbox;
