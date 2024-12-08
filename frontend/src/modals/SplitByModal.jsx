import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Tooltip } from "@nextui-org/react";

// Dummy list of users (replace with actual data)
const userList = [
  { name: "Alice", avatar: "https://via.placeholder.com/50" },
  { name: "Bob", avatar: "https://via.placeholder.com/50" }
];

const PaidByModal = ({ isOpen, onClose }) => {
  const [exactAmounts, setExactAmounts] = useState({}); // Store exact amount inputs for each user

  // Handle input change for each user's exact amount
  const handleAmountChange = (user, amount) => {
    setExactAmounts((prev) => ({
      ...prev,
      [user]: parseFloat(amount) || 0, // Update amount for the specific user
    }));
  };

  // Calculate the total of all entered amounts
  const totalAmount = Object.values(exactAmounts).reduce((sum, amount) => sum + amount, 0);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      style={{
        position: 'absolute',
        left: 'calc(50% + 200px)',
        top: '40%',
        transform: 'translateY(-40%)',
        width: '400px',
        height: 'auto',
      }}
    >
      <ModalContent>
        <ModalHeader>Select Split Options</ModalHeader>
        <ModalBody>
          {/* Button Group */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <Tooltip content="Equal">
              <Button radius="full">=</Button>
            </Tooltip>
            <Tooltip content="Exact Amount">
              <Button radius="full">$.$</Button>
            </Tooltip>
            <Tooltip content="Percentage">
              <Button radius="full">%</Button>
            </Tooltip>
          </div>

          {/* Split by Exact Amounts */}
          <h4>Split by exact amounts</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {userList.map((user, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                {/* User Avatar */}
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                {/* User Name */}
                <span style={{ flexGrow: 1 }}>{user.name}:</span>
                {/* Input for Exact Amount */}
                <Input
                  type="text"
                  placeholder="$"
                  value={exactAmounts[user.name] || ""}
                  onChange={(e) => handleAmountChange(user.name, e.target.value)}
                  style={{ width: '100px' }}
                />
              </li>
            ))}
          </ul>

          {/* Total */}
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <h4>TOTAL</h4>
            <p>${totalAmount.toFixed(2)}</p>
            <p style={{ fontSize: '12px', color: '#888' }}>
              ${(0 - totalAmount).toFixed(2)} left
            </p>
          </div>
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
