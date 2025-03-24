import React, { useState } from "react";
import styled from "styled-components";
import { useTodoStore } from "../store/useTodoStore";

interface Props {
  closeModal: () => void;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

function AddTodoModal({ closeModal }: Props) {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = () => {
    if (text.trim()) {
      addTodo(text);
      closeModal();
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <h3>Add Todo</h3>
        <input title="Add Todo" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your todo" />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </ModalContent>
    </ModalWrapper>
  );
}

export default AddTodoModal;
