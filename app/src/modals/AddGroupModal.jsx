import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { HiUserGroup } from "react-icons/hi";

const AddGroupModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Create A Group</ModalHeader>
            <ModalBody>
              <div className="flex w-full md:flex-nowrap gap-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className="icon-container" style={{ backgroundColor: '#add8e6', height: '150px', width: '150px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Icon/Image
                </div>
                <HiUserGroup size={50} />
                <Input type="text" label="Group Name" placeholder="Enter group name" className="group-name-input" style={{ backgroundColor: '#90ee90', borderRadius: '8px', width: '100%' }} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddGroupModal;
