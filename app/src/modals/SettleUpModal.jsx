import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, DatePicker } from "@nextui-org/react";
import { FaDollarSign } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

const SettleUpModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Record a Payment</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="flex items-center gap-4 w-full">
                  <FaDollarSign size={30} />
                  <Input
                    type="amount"
                    label="Amount"
                    placeholder="0.0"
                    className="flex-grow"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="flex items-center gap-4 w-full">
                  <BsCalendar2DateFill size={30} />
                  <DatePicker
                    label="Current Date"
                    className="flex-grow max-w-[284px]"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Discard
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

export default SettleUpModal;
