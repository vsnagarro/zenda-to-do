import styled from "styled-components";
import Checkbox from "../styles/Checkbox";
import colors from "../styles/colors";
import { useState } from "react";
import { Todo } from "../store/useTodoStore";

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: number, text: string, completed: boolean) => void;
  deleteTodo: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const Item = styled.div`
  width: 100%;
  padding: 1.25rem;
  color: white;
  &:hover {
    background: ${colors.backgroundResting};
  }
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 1rem 4.5rem;
`;
const ItemContent = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
`;
const ItemText = styled.div`
  flex: 1;
`;
const ContextMenu = styled.div<{ $isVisible: boolean; $top: number; $left: number }>`
  position: fixed;
  width: 180px;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  background: ${colors.modalBackground};
  border: 1px solid #ccc;
  border-radius: 0.125rem;
  padding: 0.75rem;
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  z-index: 1000;
`;
const ContextBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
const ContextMenuItem = styled.div`\
  cursor: pointer;
`;

function TodoItem({ todo, updateTodo, deleteTodo, onEdit }: TodoItemProps) {
  const [contextMenu, setContextMenu] = useState({
    $isVisible: false,
    x: 0,
    y: 0,
  });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    setContextMenu({
      $isVisible: true,
      x: event.clientX + 8,
      y: event.clientY + 16,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({
      $isVisible: false,
      x: 0,
      y: 0,
    });
  };

  return (
    <>
      <Item>
        <ItemHeader>
          <p>{todo.creator}</p>
          <p>{todo.createdAt}</p>
        </ItemHeader>
        <ItemContent>
          <div>
            <Checkbox
              $isChecked={todo.completed}
              onClick={() => updateTodo(todo.id, todo.text, !todo.completed)}
            />
          </div>
          <ItemText onContextMenu={handleContextMenu} onDoubleClick={() => onEdit(todo)}>
            {todo.text}
          </ItemText>
        </ItemContent>
      </Item>
      {contextMenu.$isVisible && (
        <>
          <ContextMenu
            $isVisible={contextMenu.$isVisible}
            $top={contextMenu.y}
            $left={contextMenu.x}
            onClick={handleCloseContextMenu}
          >
            <ContextMenuItem onClick={() => deleteTodo(todo.id)}>Delete</ContextMenuItem>
          </ContextMenu>
          <ContextBackdrop onClick={handleCloseContextMenu} />
        </>
      )}
    </>
  );
}

export default TodoItem;
