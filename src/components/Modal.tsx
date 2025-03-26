import { useState } from "react";
import styled from "styled-components";
import TextArea from "../styles/Textarea";
import Button from "../styles/Button";
import colors from "../styles/colors";

interface ModalProps {
  isOpen: boolean;
  onSave: (description: string) => void;
  onClose: () => void;
  title?: string;
  todo?: {
    text: string;
    status: "pending" | "completed";
  };
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.modalBackdrop};
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  background: ${colors.modalBackground};
  padding: 1.5rem;
  border: 1px solid ${colors.modalBorder};
  border-radius: 0.125rem;
  width: 450px;
  height: auto;
  min-height: 170px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Modal({ isOpen, onSave, onClose, title, todo }: ModalProps) {
  const [description, setDescription] = useState(todo ? todo.text : "");

  return isOpen ? (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <h2>{title}</h2>
          <button type="button" title="close" onClick={onClose}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.09863 0.533203L16.432 15.8665M16.432 0.533203L1.09863 15.8665"
                stroke="white"
                strokeWidth="0.75"
              />
            </svg>
          </button>
        </ModalHeader>
        <TextArea
          value={description}
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <ModalFooter>
          <Button $variant="tertiary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            $variant="primary"
            onClick={() => onSave(description)}
            disabled={!description}
          >
            {todo ? "Update" : "Create"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  ) : null;
}

export default Modal;
