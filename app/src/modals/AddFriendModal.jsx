import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";

const AddFriendModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Add a Friend</ModalHeader>
            <ModalBody>
              <div className="flex items-center gap-4">
                <MdEmail size={50} />
                <Input
                  type="email"
                  label="Friend's Email"
                  placeholder="Enter friend's email"
                  className="email-input"
                  style={{ width: '100%' }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Send Invitation
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddFriendModal;
