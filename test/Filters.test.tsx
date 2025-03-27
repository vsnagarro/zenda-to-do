import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../src/components/Filters";
import { Value } from "../src/store/useTodoStore";

describe("Filters Component", () => {
  const mockSetShowFilter = vi.fn();
  const mockSetValueFilter = vi.fn();
  const mockSetShowSort = vi.fn();
  const mockSetValueSort = vi.fn();

  const defaultProps = {
    $showFilter: false,
    $setShowFilter: mockSetShowFilter,
    $valueFilter: "" as Value["value"],
    $setValueFilter: mockSetValueFilter,
    $showSort: false,
    $setShowSort: mockSetShowSort,
    $valueSort: "" as Value["value"],
    $setValueSort: mockSetValueSort,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render filter and sort buttons", () => {
    render(<Filters {...defaultProps} />);
    expect(screen.getByText("Filter")).toBeInTheDocument();
    expect(screen.getByText("Sort")).toBeInTheDocument();
  });

  it("should show the filter dropdown on hover", () => {
    render(<Filters {...defaultProps} />);
    const filterButton = screen.getByText("Filter");
    fireEvent.mouseEnter(filterButton);
    expect(mockSetShowFilter).toHaveBeenCalledWith(true);
  });

  it("should show the sort dropdown on hover", () => {
    render(<Filters {...defaultProps} />);
    const sortButton = screen.getByText("Sort");
    fireEvent.mouseEnter(sortButton);
    expect(mockSetShowSort).toHaveBeenCalledWith(true);
  });

  it("should call $setValueFilter when a filter option is selected", () => {
    render(<Filters {...defaultProps} $showFilter={true} />);
    const filterOption = screen.getByText("Complete");
    fireEvent.click(filterOption);
    expect(mockSetValueFilter).toHaveBeenCalledWith("complete");
  });

  it("should call $setValueSort when a sort option is selected", () => {
    render(<Filters {...defaultProps} $showSort={true} />);
    const sortOption = screen.getByText("Newest");
    fireEvent.click(sortOption);
    expect(mockSetValueSort).toHaveBeenCalledWith("newest");
  });

  it("should hide the filter dropdown on mouse leave", () => {
    render(<Filters {...defaultProps} $showFilter={true} />);
    const filterContainer = screen.getByText("Filter").parentElement;
    if (filterContainer) {
      fireEvent.mouseLeave(filterContainer);
    }
    expect(mockSetShowFilter).toHaveBeenCalledWith(false);
  });

  it("should hide the sort dropdown on mouse leave", () => {
    render(<Filters {...defaultProps} $showSort={true} />);
    const sortContainer = screen.getByText("Sort").parentElement;
    if (sortContainer) {
      fireEvent.mouseLeave(sortContainer);
    }
    expect(mockSetShowSort).toHaveBeenCalledWith(false);
  });
});
