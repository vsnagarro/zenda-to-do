import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Div = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

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

const SearchBar = ({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <Div>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6.64648" cy="6.56836" r="5.5" stroke="white" strokeWidth="0.75" />
        <path d="M16.4395 16.3599L10.5645 10.4849" stroke="white" strokeWidth="0.75" />
      </svg>

      <Input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </Div>
  );
};

export default SearchBar;
