import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../src/components/TodoItem";
import { Todo } from "../src/store/useTodoStore";

describe("TodoItem Component", () => {
  const mockUpdateTodo = vi.fn();
  const mockDeleteTodo = vi.fn();
  const mockOnEdit = vi.fn();

  const todo: Todo = {
    id: 1,
    createdAt: "8:21pm",
    creator: "Anonymous",
    text: "Lorem ipsum dolor sit amet.",
    completed: false,
  };
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the todo's content", () => {
    render(
      <TodoItem
        todo={todo}
        updateTodo={mockUpdateTodo}
        deleteTodo={mockDeleteTodo}
        onEdit={mockOnEdit}
      />,
    );

    expect(screen.getByText("Anonymous")).toBeInTheDocument();
    expect(screen.getByText("8:21pm")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet.")).toBeInTheDocument();
  });

  it("should call updateTodo when checkbox is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        updateTodo={mockUpdateTodo}
        deleteTodo={mockDeleteTodo}
        onEdit={mockOnEdit}
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockUpdateTodo).toHaveBeenCalledWith(1, "Lorem ipsum dolor sit amet.", true);
  });

  it("should open the context menu on right-click", () => {
    render(
      <TodoItem
        todo={todo}
        updateTodo={mockUpdateTodo}
        deleteTodo={mockDeleteTodo}
        onEdit={mockOnEdit}
      />,
    );
    const itemText = screen.getByText("Lorem ipsum dolor sit amet.");
    fireEvent.contextMenu(itemText);

    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("should call deleteTodo when Delete is clicked in context menu", () => {
    render(
      <TodoItem
        todo={todo}
        updateTodo={mockUpdateTodo}
        deleteTodo={mockDeleteTodo}
        onEdit={mockOnEdit}
      />,
    );

    const itemText = screen.getByText("Lorem ipsum dolor sit amet.");
    fireEvent.contextMenu(itemText);

    const deleteOption = screen.getByText("Delete");
    fireEvent.click(deleteOption);

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });

  it("should call onEdit when item text is double-clicked", () => {
    render(
      <TodoItem
        todo={todo}
        updateTodo={mockUpdateTodo}
        deleteTodo={mockDeleteTodo}
        onEdit={mockOnEdit}
      />,
    );

    const itemText = screen.getByText("Lorem ipsum dolor sit amet.");
    fireEvent.doubleClick(itemText);

    expect(mockOnEdit).toHaveBeenCalledWith(todo);
  });

  it("should close the context menu when backdrop is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        updateTodo={mockUpdateTodo}
        deleteTodo={mockDeleteTodo}
        onEdit={mockOnEdit}
      />,
    );

    const itemText = screen.getByText("Lorem ipsum dolor sit amet.");
    fireEvent.contextMenu(itemText);

    expect(screen.getByText("Delete")).toBeInTheDocument();

    const backdrop = screen.getByTestId("context-backdrop");
    fireEvent.click(backdrop);

    expect(screen.queryByText("Delete")).toBeNull();
  });
});
