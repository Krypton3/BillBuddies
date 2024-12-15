import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { BsPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

const SigninModal = ({ isOpen, onOpenChange, onSignupOpen }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Sign In</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="flex items-center gap-4 w-full">
                  <BsPersonFill size={30} />
                  <Input
                    type="text"
                    label="Username"
                    placeholder="Enter your username"
                    className="flex-grow"
                    style={{ width: '100%' }}
                    required
                  />
                </div>
                <div className="flex items-center gap-4 w-full">
                  <RiLockPasswordFill size={30} />
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    className="flex-grow"
                    style={{ width: '100%' }}
                    required
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Sign In
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SigninModal;
