import styled from "styled-components";
import colors from "../styles/colors";

interface ButtonProps {
  $variant: "primary" | "tertiary"; // Only primary and tertiary variants
  disabled?: boolean; // Handle disabled state
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  border-radius: 0.25rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  background: ${(props) => (props.$variant === "primary" ? (props.disabled ? colors.buttonDisabledBackground : colors.buttonPrimaryBackground) : "transparent")};
  color: ${(props) => (props.disabled ? colors.buttonDisabledText : props.$variant === "tertiary" ? colors.buttonTertiaryDisabledText : colors.buttonTextWhite)};
  padding: ${(props) => (props.$variant === "primary" ? ".5rem 1.5rem" : "0")};
  border-bottom: ${(props) => (props.$variant === "tertiary" ? (props.disabled ? "none" : `1px solid ${colors.buttonTertiary}`) : "none")};
  gap: 0.25rem;
  &:hover {
    background: ${(props) => (props.$variant === "primary" && !props.disabled ? colors.buttonPrimaryHoverBackground : colors.buttonDisabledBackground)};
    border-bottom: ${(props) => (props.$variant === "tertiary" && !props.disabled ? `2px solid ${colors.buttonTertiaryHover}` : "none")};
  }
`;

export default Button;
