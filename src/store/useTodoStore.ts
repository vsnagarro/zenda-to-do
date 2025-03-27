import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Todo {
  creator: string;
  createdAt: string;
  id: number;
  text: string;
  completed: boolean;
}

export interface Value {
  value: "complete" | "incomplete" | "newest" | "oldest" | "";
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string, completed: boolean) => void;
}

const loadTodosFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const useTodoStore = create<TodoStore>()(
  devtools(
    (set, get) => ({
      todos: loadTodosFromLocalStorage(), // Load todos from localStorage
      addTodo: (text) => {
        if (!text.trim()) {
          console.error("Cannot add an empty to-do.");
          return;
        }
        set(
          (state) => {
            const currentDate = new Date();
            const updatedTodos = [
              ...state.todos,
              {
                id: currentDate.getTime(),
                createdAt: new Date()
                  .toLocaleTimeString()
                  .toLowerCase()
                  .replace(/\:\d\d\s/, ""),
                creator: "Anonymous",
                text,
                completed: false,
              },
            ];
            saveTodosToLocalStorage(updatedTodos); // Save to localStorage
            return { todos: updatedTodos };
          },
          false,
          "addTodo",
        );
      },
      deleteTodo: (id) => {
        const todos = get().todos;
        if (!todos.find((todo) => todo.id === id)) {
          console.error(`Todo with ID ${id} not found.`);
          return;
        }
        set(
          (state) => {
            const updatedTodos = state.todos.filter((todo) => todo.id !== id);
            saveTodosToLocalStorage(updatedTodos); // Save to localStorage
            return { todos: updatedTodos };
          },
          false,
          "deleteTodo",
        );
      },
      updateTodo: (id: number, text: string, completed: boolean) => {
        if (!text?.trim()) {
          console.error("Cannot update to an empty text.");
          return;
        }
        set(
          (state) => {
            const updatedTodos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, text, completed } : todo,
            );
            saveTodosToLocalStorage(updatedTodos); // Save to localStorage
            return { todos: updatedTodos };
          },
          false,
          "updateTodo",
        );
      },
    }),
    { name: "TodoStore" },
  ),
);

export default useTodoStore;
