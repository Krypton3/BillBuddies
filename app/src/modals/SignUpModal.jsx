import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const SignupModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="flex items-center gap-4 w-full">
                  <BsPersonFill size={30} />
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    className="flex-grow"
                    style={{ width: '100%' }}
                    required
                  />
                </div>
                <div className="flex items-center gap-4 w-full">
                  <MdEmail size={30} />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    className="flex-grow"
                    style={{ width: '100%' }}
                    required
                  />
                </div>
                <div className="flex items-center gap-4 w-full">
                  <FaSquarePhone size={30} />
                  <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="Enter your phone number"
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
                Sign Up
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;
