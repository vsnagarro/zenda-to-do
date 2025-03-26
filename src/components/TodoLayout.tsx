import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Modal from "./Modal";
import Button from "../styles/Button";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import { Todo } from "../store/useTodoStore";

interface TodolayoutProps {
  todos: Todo[];
  updateTodo: (id: number, text: string, completed: boolean) => void;
  deleteTodo: (id: number) => void;
  onEdit: (todo: Todo | null) => void;
  onSave: (text: string) => void;
  onCloseModal: () => void;
  isModalOpen: boolean;
  editingTodo: Todo;
  filterTodos: (value: string) => Todo[];
  sortTodos: (value: string) => Todo[];
}

const Layout = styled.div`
  padding: 2.25rem;
  position: relative;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 5rem 4.5rem 1fr 4.5rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const H1 = styled.h1`
  text-align: center;
`;
const CreateButton = styled(Button)`
  position: absolute;
  bottom: 2.25rem;
  right: 2.25rem;
`;

function TodoLayout({
  todos,
  updateTodo,
  deleteTodo,
  onEdit,
  onSave,
  onCloseModal,
  isModalOpen,
  editingTodo,
  filterTodos,
  sortTodos,
}: TodolayoutProps) {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [valueFilter, setValueFilter] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [valueSort, setValueSort] = useState("");
  const [todoList, setTodoList] = useState(todos);

  useEffect(() => {
    const searchedText = todos.filter((todo: any) =>
      todo.text.toLowerCase().includes(search.toLowerCase()),
    );
    setTodoList(searchedText);
  }, [search]);

  useEffect(() => {
    const filteredText = filterTodos(valueFilter);
    setTodoList(filteredText);
  }, [valueFilter]);

  useEffect(() => {
    const sortedText = sortTodos(valueSort);
    setTodoList(sortedText);
  }, [valueSort]);

  return (
    <Layout>
      <H1>To-Do</H1>
      <Actions>
        <SearchBar
          placeholder="Search Tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Filters
          $showFilter={showFilter}
          $setShowFilter={setShowFilter}
          $valueFilter={valueFilter}
          $setValueFilter={setValueFilter}
          $showSort={showSort}
          $setShowSort={setShowSort}
          $valueSort={valueSort}
          $setValueSort={setValueSort}
        />
      </Actions>
      <TodoList
        todos={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        onEdit={onEdit}
      />
      <CreateButton $variant="primary" onClick={() => onEdit(null)}>
        Create
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.01562 0.199951V16.2M0.015625 8.19995H16.0156"
            stroke="white"
            strokeWidth="0.75"
          />
        </svg>
      </CreateButton>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={onCloseModal}
          onSave={onSave}
          todo={editingTodo}
          title="Create New To-Do"
        />
      )}
    </Layout>
  );
}

export default TodoLayout;
