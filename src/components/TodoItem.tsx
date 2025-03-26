import styled from "styled-components";
import Checkbox from "../styles/Checkbox";
import colors from "../styles/colors";
import { useRef, useState } from "react";

const Item = styled.div`
  padding: 1.25rem;
  color: white;
  &:hover {
    background: ${colors.backgroundResting};
  }
`;
const ItemHeader = styled.div``;
const ItemContent = styled.div`
  display: flex;
  align-items: top;
  gap: 3rem;
  justify-content: space-between;
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

function TodoItem({ todo, updateTodo, deleteTodo, onEdit }: any) {
  const itemRef = useRef(null);
  const [contextMenu, setContextMenu] = useState({
    $isVisible: false,
    x: 0,
    y: 0,
  });

  // Function to handle right click
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default browser context menu
    setContextMenu({
      $isVisible: true,
      x: event.clientX + 8,
      y: event.clientY + 16,
    });
  };

  // Function to close the context menu
  const handleCloseContextMenu = () => {
    setContextMenu({
      $isVisible: false,
      x: 0,
      y: 0,
    });
  };

  return (
    <Item>
      <ItemHeader></ItemHeader>
      <ItemContent>
        <div>
          <Checkbox $isChecked={todo.completed} onClick={() => updateTodo(todo.id, todo.text, !todo.completed)} />
        </div>
        <span onContextMenu={handleContextMenu} ref={itemRef} onDoubleClick={() => onEdit(todo)}>
          {todo.text}
        </span>
      </ItemContent>

      <ContextMenu
        $isVisible={contextMenu.$isVisible}
        $top={contextMenu.y}
        $left={contextMenu.x}
        onClick={handleCloseContextMenu} // Close menu on click
      >
        <ContextMenuItem onClick={() => deleteTodo(todo.id)}>Delete</ContextMenuItem>
      </ContextMenu>

      {contextMenu.$isVisible && <ContextBackdrop onClick={handleCloseContextMenu} />}
    </Item>
  );
}

export default TodoItem;
