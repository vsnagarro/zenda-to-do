import styled from "styled-components";
import colors from "./colors";

interface DropdownItemProps {
  $isHovered?: boolean;
  $isSelected?: boolean;
}

const DropdownItem = styled.div<DropdownItemProps>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 16px;
  color: ${colors.dropdownText};
  background: ${(props) => (props.$isSelected ? colors.dropdownSelectedBackground : props.$isHovered ? colors.dropdownHoverBackground : colors.dropdownRestingBackground)};
  cursor: pointer;
  transition: background-color 0.2s ease;

  border-left: ${(props) => (props.$isSelected ? `4px solid ${colors.dropdownSelectedBar}` : "4px solid transparent")};

  &:hover {
    background: ${colors.dropdownHoverBackground};
    color: ${colors.dropdownHoverText};
  }
`;

export default DropdownItem;
