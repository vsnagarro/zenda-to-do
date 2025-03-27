import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../src/components/Modal";
import { Todo } from "../src/store/useTodoStore";

describe("Modal Component", () => {
  const mockOnSave = vi.fn();
  const mockOnClose = vi.fn();

  const defaultProps = {
    isOpen: true,
    onSave: mockOnSave,
    onClose: mockOnClose,
    title: "Edit Todo",
    todo: {
      id: 1,
      creator: "Anonymous",
      createdAt: "12:00pm",
      text: "Sample Todo",
      completed: false,
    } as Todo,
  };

  beforeEach(() => {
    vi.clearAllMocks(); //
  });

  it("should render the modal when `isOpen` is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Edit Todo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Description")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
  });

  it("should not render the modal when `isOpen` is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Edit Todo")).toBeNull();
    expect(screen.queryByPlaceholderText("Enter Description")).toBeNull();
  });

  it("should update the description when typing in the text area", () => {
    render(<Modal {...defaultProps} />);
    const textArea = screen.getByPlaceholderText("Enter Description");
    fireEvent.change(textArea, { target: { value: "Updated Description" } });
    expect((textArea as HTMLTextAreaElement).value).toBe("Updated Description");
  });

  it("should call `onSave` with the description when the save button is clicked", () => {
    render(<Modal {...defaultProps} />);
    const textArea = screen.getByPlaceholderText("Enter Description");
    fireEvent.change(textArea, { target: { value: "Updated Description" } });
    const saveButton = screen.getByText("Update");
    fireEvent.click(saveButton);
    expect(mockOnSave).toHaveBeenCalledWith("Updated Description");
  });

  it("should call `onClose` when the cancel button is clicked", () => {
    render(<Modal {...defaultProps} />);
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should disable the save button when the description is empty", () => {
    render(<Modal {...defaultProps} todo={null} />);
    const saveButton = screen.getByText("Create");
    expect(saveButton).toBeDisabled();
  });

  it("should call `onClose` when the close button (X) is clicked", () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByTitle("close");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
