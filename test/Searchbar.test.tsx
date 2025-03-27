import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../src/components/SearchBar";

describe("SearchBar Component", () => {
  const mockOnChange = vi.fn();

  const defaultProps = {
    placeholder: "Search...",
    value: "",
    onChange: mockOnChange,
  };

  it("should render the search bar with the correct placeholder", () => {
    render(<SearchBar {...defaultProps} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("should display the correct value in the input", () => {
    render(<SearchBar {...defaultProps} value="Test Value" />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toHaveValue("Test Value");
  });

  it("should call onChange when typing in the input field", () => {
    render(<SearchBar {...defaultProps} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "New Value" } });

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should render the search icon (SVG)", () => {
    render(<SearchBar {...defaultProps} />);

    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });
});
