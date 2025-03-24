import React, { useState } from "react";
import TodoLayout from "./components/TodoLayout";
import useTodoStore from "./store/useTodoStore";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const { todos, addTodo, updateTodo } = useTodoStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<null | { id: number; text: string }>(null);

  const handleEditTodo = (todo: { id: number; text: string }) => {
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
      <TodoLayout todos={todos} onEdit={handleEditTodo} onSave={handleSaveTodo} onCloseModal={handleCloseModal} isModalOpen={isModalOpen} editingTodo={editingTodo} />
    </>
  );
}

export default App;
