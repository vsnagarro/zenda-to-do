import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const NoItem = styled.div`
  text-align: center;
  padding: 1.25rem;
`;
function TodoList({ todos, onEdit }: any) {
  return <ListContainer>{todos.length > 0 ? todos.map((todo: any) => <TodoItem key={todo.id} todo={todo} onEdit={onEdit} />) : <NoItem>Input your first shared to-do</NoItem>}</ListContainer>;
}

export default TodoList;
