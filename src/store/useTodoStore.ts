import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
  toggleTodo: (id: number) => void;
  filterTodos: (status: "completed" | "incomplete") => Todo[];
  sortTodos: (order: "newest" | "oldest") => Todo[];
}

const useTodoStore = create<TodoStore>()(
  devtools(
    (set, get) => ({
      todos: [],

      // Add a new to-do
      addTodo: (text) => {
        if (!text.trim()) {
          console.error("Cannot add an empty to-do.");
          return;
        }
        set(
          (state) => ({
            todos: [...state.todos, { id: Date.now(), text, completed: false }],
          }),
          false,
          "addTodo"
        );
      },

      // Delete a to-do
      deleteTodo: (id) => {
        const todos = get().todos;
        if (!todos.find((todo) => todo.id === id)) {
          console.error(`Todo with ID ${id} not found.`);
          return;
        }
        set(
          (state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }),
          false,
          "deleteTodo"
        );
      },

      // Update a to-do
      updateTodo: (id, text) => {
        if (!text.trim()) {
          console.error("Cannot update to an empty text.");
          return;
        }
        set(
          (state) => ({
            todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
          }),
          false,
          "updateTodo"
        );
      },

      // Toggle a to-do's completion state
      toggleTodo: (id) => {
        const todos = get().todos;
        if (!todos.find((todo) => todo.id === id)) {
          console.error(`Todo with ID ${id} not found.`);
          return;
        }
        set(
          (state) => ({
            todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
          }),
          false,
          "toggleTodo"
        );
      },

      // Filter todos based on status
      filterTodos: (status) => {
        const todos = get().todos;
        return [...todos].filter((todo) => (status === "completed" ? todo.completed : !todo.completed));
      },

      // Sort todos by newest or oldest
      sortTodos: (order) => {
        const todos = get().todos;
        return [...todos].sort((a, b) => (order === "newest" ? b.id - a.id : a.id - b.id));
      },
    }),
    { name: "TodoStore" }
  ) // Name for Redux DevTools
);

export default useTodoStore;
