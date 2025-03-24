import styled from "styled-components";
import Checkbox from "../styles/Checkbox";
import Button from "../styles/Button";
import colors from "../styles/colors";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${colors.modalBackground};
  color: white;
`;

function TodoItem({ todo, onEdit }: any) {
  return (
    <Item>
      <div>
        <Checkbox $isChecked={todo.completed} onChange={() => console.log("Toggle")} />
        <span onDoubleClick={() => onEdit(todo)}>{todo.text}</span>
      </div>
      <Button $variant="primary" onClick={() => console.log("Delete")}>
        Delete
      </Button>
    </Item>
  );
}

export default TodoItem;
