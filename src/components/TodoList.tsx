import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function TodoList({ todos, onEdit }: any) {
  return (
    <ListContainer>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} onEdit={onEdit} />
      ))}
    </ListContainer>
  );
}

export default TodoList;
