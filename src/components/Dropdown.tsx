import styled from "styled-components";
import colors from "../styles/colors";
import { Value } from "../store/useTodoStore";
import { toWordCase } from "../utilities";

interface DropdownItemProps {
  $show: boolean;
  $isHovered?: boolean;
  $isSelected?: boolean;
}
interface DropdownProps {
  $show: boolean;
  $value: Value;
  $onChangeValue: (value: Value["value"]) => void;
  $items: Value["value"][];
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
      cursor: pointer;
      &:hover {
        padding-left: .5rem;
        border-left: .125rem solid ${colors.dropdownSelected};
      }
      &.selected {
        padding-left: .375rem;
        border-left: .25rem solid ${colors.dropdownSelected};
      }}
    }
  }
`;

const Dropdown = ({ $show, $value, $onChangeValue, $items }: DropdownProps) => {
  return (
    <DropdownItem $show={$show}>
      <ul>
        {$items.map(($item) => (
          <li
            key={$item}
            onClick={() => $item && $onChangeValue($item)}
            className={$item && $item.toLowerCase() === `${$value}` ? "selected" : ""}
          >
            {toWordCase($item)}
          </li>
        ))}
        <li onClick={() => $onChangeValue("")}>Clear Filters</li>
      </ul>
    </DropdownItem>
  );
};

export default Dropdown;
