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
  updateTodo: (id: number, text: string) => void;
  toggleTodo: (id: number) => void;
  filterTodos: ({ value }: Value) => Todo[];
  sortTodos: ({ value }: Value) => Todo[];
  searchTodos: (search: string) => Todo[];
}

const initialTodos: Todo[] = [
  {
    id: 1743004295456,
    createdAt: "8:21pm",
    creator: "Anonymous",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    completed: false,
  },
  {
    id: 1743004295457,
    createdAt: "9:15pm",
    creator: "Anonymous",
    text: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    completed: true,
  },
  {
    id: 1743004295458,
    createdAt: "9:25pm",
    creator: "Anonymous",
    text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    completed: false,
  },
];

const useTodoStore = create<TodoStore>()(
  devtools(
    (set, get) => ({
      todos: initialTodos,
      addTodo: (text) => {
        if (!text.trim()) {
          console.error("Cannot add an empty to-do.");
          return;
        }
        set(
          (state) => {
            const currentDate = new Date();
            return {
              todos: [
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
              ],
            };
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
          (state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }),
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
          (state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, text, completed } : todo,
            ),
          }),
          false,
          "updateTodo",
        );
      },
      toggleTodo: (id) => {
        const todos = get().todos;
        if (!todos.find((todo) => todo.id === id)) {
          console.error(`Todo with ID ${id} not found.`);
          return;
        }
        set(
          (state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
          }),
          false,
          "toggleTodo",
        );
      },
    }),
    { name: "TodoStore" },
  ),
);

export default useTodoStore;
