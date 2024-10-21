// PaidByModal.js
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

// Dummy list of users (you can replace this with actual data)
const userList = ["Jack", "Australia", "Canada"];

const PaidByModal = ({ isOpen, onClose, selectedUser, onUserSelect }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      style={{
        position: 'absolute',
        left: 'calc(50% + 200px)',
        top: '40%',
        transform: 'translateY(-40%)',
        width: '300px',
        height: '300px'
      }}
    >
      <ModalContent>
        <ModalHeader>Select User</ModalHeader>
        <ModalBody>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {userList.map((user, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Button
                  color={selectedUser === user ? "secondary" : "default"}
                  onPress={() => onUserSelect(user)}
                >
                  {user}
                </Button>
              </li>
            ))}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaidByModal;
