import styled from "styled-components";
import colors from "../styles/colors";

interface DropdownItemProps {
  $show: boolean;
  $isHovered?: boolean;
  $isSelected?: boolean;
}
interface DropdownProps {
  $show: boolean;
  $value: string;
  $onChangeValue: (value: string) => void;
  $items: string[];
}
const DropdownItem = styled.div<DropdownItemProps>`
  display: ${(props) => (props.$show ? "block" : "none")};
  position: absolute;
  top: 2rem;
  left: 0;
  font-size: 16px;
  background: ${colors.dropdownBackground};
  border: 1px solid ${colors.dropdownBorder};
  text-align: left;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      white-space: nowrap;
      padding: 0.625rem;
      min-width: 180px;
    }
  }
`;

const Dropdown = ({ $show, $onChangeValue, $items }: DropdownProps) => {
  return (
    <DropdownItem $show={$show}>
      <ul>
        {$items.map(($item) => (
          <li key={$item} onClick={() => $onChangeValue($item)}>
            {$item}
          </li>
        ))}
        <li onClick={() => $onChangeValue("")}>Clear Filters</li>
      </ul>
    </DropdownItem>
  );
};

export default Dropdown;
