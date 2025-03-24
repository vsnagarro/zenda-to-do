import React, { useState } from "react";
import styled from "styled-components";
import TextArea from "../styles/Textarea";
import Button from "../styles/Button";

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
  width: 400px;
`;

function Modal({ isOpen, onSave, onClose, todo }: any) {
  const [description, setDescription] = useState(todo ? todo.text : "");

  return isOpen ? (
    <ModalWrapper>
      <ModalContent>
        <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button $variant="tertiary" onClick={onClose}>
          Cancel
        </Button>
        <Button $variant="primary" onClick={() => onSave(description)}>
          {todo ? "Update" : "Create"}
        </Button>
      </ModalContent>
    </ModalWrapper>
  ) : null;
}

export default Modal;
