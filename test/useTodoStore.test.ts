import { describe, it, expect, beforeEach } from "vitest";
import useTodoStore from "../src/store/useTodoStore";

describe("useTodoStore", () => {
  beforeEach(() => {
    const { todos } = useTodoStore.getState();
    todos.splice(
      0,
      todos.length,
      ...[
        {
          id: 1743004295456,
          createdAt: "8:21pm",
          creator: "Anonymous",
          text: "Lorem ipsum",
          completed: false,
        },
        {
          id: 1743004295457,
          createdAt: "9:15pm",
          creator: "Anonymous",
          text: "Ipsum dolor",
          completed: true,
        },
        {
          id: 1743004295458,
          createdAt: "9:25pm",
          creator: "Anonymous",
          text: "Dolor sit amet",
          completed: false,
        },
      ],
    );
  });

  it("should add a new todo", () => {
    const { addTodo, todos } = useTodoStore.getState();
    const initialLength = todos.length;

    addTodo("New Todo");

    const updatedTodos = useTodoStore.getState().todos;

    expect(updatedTodos.length).toBe(initialLength + 1);
    expect(updatedTodos[updatedTodos.length - 1].text).toBe("New Todo");
    expect(updatedTodos[updatedTodos.length - 1].completed).toBe(false);
  });

  it("should delete a todo", () => {
    const { deleteTodo, todos } = useTodoStore.getState();
    const initialLength = todos.length;

    deleteTodo(1743004295456);

    const updatedTodos = useTodoStore.getState().todos;

    expect(updatedTodos.length).toBe(initialLength - 1);
    expect(updatedTodos.find((todo) => todo.id === 1743004295456)).toBeUndefined();
  });

  it("should update a todo", () => {
    const { updateTodo, todos } = useTodoStore.getState();

    updateTodo(1743004295456, "Updated Todo Text", true);

    const updatedTodos = useTodoStore.getState().todos;
    const updatedTodo = updatedTodos.find((todo) => todo.id === 1743004295456);

    expect(updatedTodo).toBeDefined();
    expect(updatedTodo?.text).toBe("Updated Todo Text");
    expect(updatedTodo?.completed).toBe(true);
  });
});
