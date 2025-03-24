import { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Modal from "./Modal";
import Button from "../styles/Button";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Layout = styled.div`
  padding: 2.25rem;
  position: relative;
  max-width: 800px;
  min-height: 100vh;
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
  bottom: 20px;
  right: 20px;
`;

function TodoLayout({ todos, onEdit, onSave, onCloseModal, isModalOpen, editingTodo }: any) {
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo: any) => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <H1>To-Do</H1>
      <Actions>
        <SearchBar placeholder="Search Tasks" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Filters onFilter={() => console.log("Filter: Completed")} onSort={() => console.log("Sort: Newest")} />
      </Actions>
      <TodoList todos={filteredTodos} onEdit={onEdit} />
      <CreateButton $variant="primary" onClick={() => onEdit(null)}>
        Create
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.01562 0.199951V16.2M0.015625 8.19995H16.0156" stroke="white" strokeWidth="0.75" />
        </svg>
      </CreateButton>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={onCloseModal} onSave={onSave} todo={editingTodo} />}
    </Layout>
  );
}

export default TodoLayout;
