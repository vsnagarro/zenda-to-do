import styled from "styled-components";
import Dropdown from "./Dropdown";
import colors from "../styles/colors";
import { Value } from "../store/useTodoStore";
import { toWordCase } from "../utilities";
interface FiltersProps {
  $showFilter: boolean;
  $setShowFilter: (value: boolean) => void;
  $valueFilter: Value["value"];
  $setValueFilter: (value: Value["value"]) => void;
  $showSort: boolean;
  $setShowSort: (value: boolean) => void;
  $valueSort: Value["value"];
  $setValueSort: (value: Value["value"]) => void;
}

const Div = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  button {
    background: transparent;
    color: white;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    display: inline-flex;
    gap: 0.25rem;
    padding: 0.125rem 0.5rem;
    align-items: center;
    cursor: pointer;
    &.active {
      border: 1px solid ${colors.buttonBorderWhite};
      background: ${colors.buttonPrimaryHoverBackground};
    }
  }
  > div {
    position: relative;
  }
`;

const Filters = ({
  $showFilter,
  $setShowFilter,
  $valueFilter,
  $setValueFilter,
  $showSort,
  $setShowSort,
  $valueSort,
  $setValueSort,
}: FiltersProps) => {
  return (
    <Div>
      <div onMouseLeave={() => $setShowFilter(false)}>
        <button
          type="button"
          onMouseEnter={() => $setShowFilter(true)}
          className={$showFilter ? "active" : ""}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.48438 2.19995C4.48438 2.87305 3.93872 3.4187 3.26562 3.4187C2.59253 3.4187 2.04688 2.87305 2.04688 2.19995C2.04688 1.52685 2.59253 0.981201 3.26562 0.981201C3.93872 0.981201 4.48438 1.52685 4.48438 2.19995Z"
              stroke="white"
              strokeWidth="0.5625"
            />
            <path
              d="M0.265625 2.19995H2.14062M12.2656 2.19995H4.39062"
              stroke="white"
              strokeWidth="0.5625"
            />
            <path
              d="M0.265625 6.69995H8.14062M12.2656 6.69995H10.3906"
              stroke="white"
              strokeWidth="0.5625"
            />
            <path
              d="M0.265625 11.2H5.14332M12.2656 11.2H7.39062"
              stroke="white"
              strokeWidth="0.5625"
            />
            <path
              d="M10.4844 6.69995C10.4844 7.37305 9.93872 7.9187 9.26562 7.9187C8.59253 7.9187 8.04688 7.37305 8.04688 6.69995C8.04688 6.02685 8.59253 5.4812 9.26562 5.4812C9.93872 5.4812 10.4844 6.02685 10.4844 6.69995Z"
              stroke="white"
              strokeWidth="0.5625"
            />
            <path
              d="M7.48438 11.2C7.48438 11.873 6.93872 12.4187 6.26562 12.4187C5.59253 12.4187 5.04688 11.873 5.04688 11.2C5.04688 10.5269 5.59253 9.9812 6.26562 9.9812C6.93872 9.9812 7.48438 10.5269 7.48438 11.2Z"
              stroke="white"
              strokeWidth="0.5625"
            />
          </svg>
          Filter{$valueFilter ? `: ${toWordCase($valueFilter)}` : ""}
        </button>
        <Dropdown
          $show={$showFilter}
          $value={$valueFilter}
          $onChangeValue={$setValueFilter}
          $items={["complete", "incomplete"]}
        />
      </div>
      <div onMouseLeave={() => $setShowSort(false)}>
        <button
          type="button"
          onMouseEnter={() => $setShowSort(true)}
          className={$showSort ? "active" : ""}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00046 11.9651C9.14691 12.1116 9.38434 12.1116 9.53079 11.9651L11.9173 9.57863C12.0637 9.43218 12.0637 9.19475 11.9173 9.0483C11.7708 8.90185 11.5334 8.90185 11.3869 9.0483L9.26562 11.1696L7.1443 9.0483C6.99786 8.90185 6.76042 8.90185 6.61397 9.0483C6.46753 9.19475 6.46753 9.43218 6.61397 9.57863L9.00046 11.9651ZM9.64062 1.69995C9.64062 1.49284 9.47273 1.32495 9.26562 1.32495C9.05852 1.32495 8.89062 1.49284 8.89062 1.69995L9.64062 1.69995ZM9.64062 11.7L9.64062 1.69995L8.89062 1.69995L8.89062 11.7L9.64062 11.7Z"
              fill="white"
            />
            <path
              d="M3.53079 1.43479C3.38434 1.28834 3.14691 1.28834 3.00046 1.43479L0.613974 3.82127C0.467528 3.96772 0.467528 4.20515 0.613974 4.3516C0.760421 4.49805 0.997858 4.49805 1.1443 4.3516L3.26562 2.23028L5.38695 4.3516C5.53339 4.49805 5.77083 4.49805 5.91728 4.3516C6.06372 4.20516 6.06372 3.96772 5.91728 3.82127L3.53079 1.43479ZM2.89062 11.7C2.89062 11.9071 3.05852 12.075 3.26562 12.075C3.47273 12.075 3.64062 11.9071 3.64062 11.7L2.89062 11.7ZM2.89062 1.69995L2.89062 11.7L3.64062 11.7L3.64062 1.69995L2.89062 1.69995Z"
              fill="white"
            />
          </svg>
          Sort{$valueSort ? `: ${toWordCase($valueSort)}` : ""}
          <Dropdown
            $show={$showSort}
            $value={$valueSort}
            $onChangeValue={$setValueSort}
            $items={["newest", "oldest"]}
          />
        </button>
      </div>
    </Div>
  );
};
export default Filters;
