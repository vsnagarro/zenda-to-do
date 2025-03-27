import styled from "styled-components";
import TodoItem from "./TodoItem";
import { Todo } from "../store/useTodoStore";

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: number, text: string, completed: boolean) => void;
  deleteTodo: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const ListContainer = styled.div`
  height: 100%;
  overflow: hidden;
  scrollbar-gutter: stable;
  &: hover {
    overflow-y: auto;
  }
`;
const NoItem = styled.div`
  text-align: center;
  padding: 1.25rem;
`;
function TodoList({ todos, updateTodo, deleteTodo, onEdit }: TodoListProps) {
  return (
    <ListContainer>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            onEdit={onEdit}
          />
        ))
      ) : (
        <NoItem>Input your first shared to-do</NoItem>
      )}
    </ListContainer>
  );
}

export default TodoList;
