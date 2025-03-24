import { create } from "zustand";

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

const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),
  filterTodos: (status) => {
    const todos = get().todos;
    return todos.filter((todo) => (status === "completed" ? todo.completed : !todo.completed));
  },
  sortTodos: (order) => {
    const todos = get().todos;
    return todos.sort((a, b) => (order === "newest" ? b.id - a.id : a.id - b.id));
  },
}));

export default useTodoStore;
