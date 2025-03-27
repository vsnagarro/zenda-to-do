import { useState } from "react";
import TodoLayout from "./components/TodoLayout";
import useTodoStore, { Todo } from "./store/useTodoStore";
import GlobalStyles from "./styles/GlobalStyles";
import Cursors from "./components/Cursors";

function App() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodoStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleEditTodo = (todo: Todo | null) => {
    todo && setEditingTodo(todo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingTodo(null);
  };

  const handleSaveTodo = (text: string) => {
    if (editingTodo) {
      updateTodo(editingTodo.id, text, editingTodo.completed);
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
      />
      <Cursors />
    </>
  );
}

export default App;
