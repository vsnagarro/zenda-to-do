import React from "react";
import styled from "styled-components";
import Input from "../styles/Input";

const Div = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
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
