import { useState } from "react";
import TodoLayout from "./components/TodoLayout";
import useTodoStore from "./store/useTodoStore";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const { todos, addTodo, updateTodo, deleteTodo, filterTodos, sortTodos } =
    useTodoStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<null | {
    id: number;
    text: string;
    completed: boolean;
  }>(null);

  const handleEditTodo = (todo: { id: number; text: string; completed: boolean }) => {
    setEditingTodo(todo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingTodo(null);
  };

  const handleSaveTodo = (text: string) => {
    if (editingTodo) {
      updateTodo(editingTodo.id, text);
    } else {
      addTodo(text);
    }
    handleCloseModal();
  };

  return (
    <>
      <GlobalStyles />
      <TodoLayout
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        onEdit={handleEditTodo}
        onSave={handleSaveTodo}
        onCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
        editingTodo={editingTodo}
        filterTodos={filterTodos}
        sortTodos={sortTodos}
      />
    </>
  );
}

export default App;
