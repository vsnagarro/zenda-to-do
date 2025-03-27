import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../src/components/Dropdown";
import { Value } from "../src/store/useTodoStore";

describe("Dropdown Component", () => {
  const mockOnChangeValue = vi.fn();

  const defaultProps = {
    $show: true,
    $value: "complete" as Value["value"],
    $onChangeValue: mockOnChangeValue,
    $items: ["complete", "incomplete", "newest", "oldest", ""] as Value["value"][],
  };

  it("should render all items when $show is true", () => {
    render(<Dropdown {...defaultProps} />);
    defaultProps.$items.forEach((item) => {
      if (item) {
        const displayedItem = `${item[0].toUpperCase()}${item.slice(1)}`;
        expect(screen.getByText(displayedItem)).toBeInTheDocument();
      }
    });
    expect(screen.getByText("Clear Filters")).toBeInTheDocument();
  });

  it("should not render anything when $show is false", () => {
    render(<Dropdown {...defaultProps} $show={false} />);
    defaultProps.$items.forEach((item) => {
      if (item) {
        const displayedItem = `${item[0].toUpperCase()}${item.slice(1)}`;
        const element = screen.queryByText(displayedItem);
        expect(element).not.toBeVisible();
      }
    });
    const clearFiltersElement = screen.queryByText("Clear Filters");
    expect(clearFiltersElement).not.toBeVisible();
  });

  it("should call $onChangeValue with the correct item value on click", () => {
    render(<Dropdown {...defaultProps} />);
    fireEvent.click(screen.getByText("Complete"));
    expect(mockOnChangeValue).toHaveBeenCalledWith("complete");
  });

  it("should call $onChangeValue with an empty string when 'Clear Filters' is clicked", () => {
    render(<Dropdown {...defaultProps} />);
    fireEvent.click(screen.getByText("Clear Filters"));
    expect(mockOnChangeValue).toHaveBeenCalledWith("");
  });

  it("should apply 'selected' class to the active item", () => {
    render(<Dropdown {...defaultProps} />);
    const selectedItem = screen.getByText("Complete");
    expect(selectedItem).toHaveClass("selected");
  });
});
