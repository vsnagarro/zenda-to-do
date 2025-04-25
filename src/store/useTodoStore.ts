import { create } from "zustand";
import { devtools } from "zustand/middleware";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { v4 as uuidv4 } from "uuid";

const getUserName = () => {
  const storedName = localStorage.getItem("userName");
  if (storedName) return storedName;
  const uniqueName = `User-${uuidv4().slice(0, 8)}`;
  localStorage.setItem("userName", uniqueName);
  return uniqueName;
};

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

interface AwarenessState {
  name: string;
  cursor: { x: number; y: number };
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string, completed: boolean) => void;
  awarenessState: Record<string, AwarenessState>;
  localClientId: number;
}

const userName = getUserName();
const ydoc = new Y.Doc();
const websocketProvider = new WebsocketProvider(
  "ws://localhost:1234",
  "todo-list-room",
  ydoc,
);
const yTodos = ydoc.getArray<Todo>("todos");
const awareness = websocketProvider.awareness;

awareness.setLocalStateField("user", {
  name: userName,
  cursor: { x: 0, y: 0 },
});

const loadTodosFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const useTodoStore = create<TodoStore>()(
  devtools(
    (set) => ({
      todos: yTodos.length > 0 ? yTodos.toArray() : loadTodosFromLocalStorage(),
      addTodo: (text) => {
        if (!text.trim()) return;
        const currentDate = new Date();
        const newTodo: Todo = {
          id: currentDate.getTime(),
          createdAt: currentDate
            .toLocaleTimeString()
            .toLowerCase()
            .replace(/\:\d\d\s/, ""),
          creator: userName,
          text,
          completed: false,
        };
        yTodos.push([newTodo]);
      },
      deleteTodo: (id) => {
        const todos = yTodos.toArray();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        yTodos.delete(0, yTodos.length);
        yTodos.push(updatedTodos);
      },
      updateTodo: (id, text, completed) => {
        if (!text.trim()) return;
        const todos = yTodos.toArray();
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, text, completed } : todo,
        );
        yTodos.delete(0, yTodos.length);
        yTodos.push(updatedTodos);
      },
      awarenessState: {},
      localClientId: websocketProvider.awareness.clientID,
    }),
    { name: "TodoStore" },
  ),
);

awareness.on("change", () => {
  const states = Array.from(awareness.getStates())
    .map(([clientId, state]) => ({
      clientId,
      ...state.user,
    }))
    .reduce(
      (acc, user) => ({
        ...acc,
        [user.clientId]: { name: user.name, cursor: user.cursor },
      }),
      {},
    );
  useTodoStore.setState({ awarenessState: states });
});

window.addEventListener("mousemove", (event) => {
  awareness.setLocalStateField("user", {
    name: userName,
    cursor: { x: event.clientX, y: event.clientY },
  });
});

yTodos.observe(() => {
  const todos = yTodos.toArray();
  useTodoStore.setState({ todos });
  saveTodosToLocalStorage(todos);
});

export default useTodoStore;
