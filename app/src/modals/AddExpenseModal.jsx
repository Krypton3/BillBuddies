import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, DatePicker } from "@nextui-org/react";
import { IoIosListBox } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import PaidByModal from "./PaidByModal";

// Dummy list of friends 
const friendList = ["Alice", "Bob", "Charlie", "David", "Eve"];

const AddExpenseModal = ({ isOpen, onOpenChange }) => {
  const [paidByModalOpen, setPaidByModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("you");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFriends, setSelectedFriends] = useState([]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter friends based on search query
  const filteredFriends = friendList.filter((friend) =>
    friend.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle friend selection
  const handleAddFriend = (friend) => {
    // Add friend only if they are not already selected
    if (!selectedFriends.includes(friend)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
    // Clear the search input after adding
    setSearchQuery("");
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setPaidByModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Expense</ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-4 w-full">
                    <p>You and:</p>
                    <div className="flex-grow">
                      <Input
                        type="text"
                        label="Friends"
                        placeholder="Search friends"
                        value={searchQuery}
                        onChange={handleSearchChange} // Handle search input
                        style={{ width: "100%" }}
                      />
                      {/* Conditionally show the filtered friend list only when there is a search query */}
                      {searchQuery && filteredFriends.length > 0 && (
                        <ul
                          style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginTop: "5px",
                            listStyle: "none",
                          }}
                        >
                          {filteredFriends.map((friend, index) => (
                            <li
                              key={index}
                              onClick={() => handleAddFriend(friend)}
                              style={{ cursor: "pointer", padding: "5px 0" }}
                            >
                              {friend}
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Show selected friends */}
                      {selectedFriends.length > 0 && (
                        <div style={{ marginTop: "10px" }}>
                          <p>Selected friends: {selectedFriends.join(", ")}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <IoIosListBox size={30} />
                    <Input
                      type="text"
                      label="Items"
                      placeholder="Enter description"
                      className="flex-grow"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <FaDollarSign size={30} />
                    <Input
                      type="amount"
                      label="Amount"
                      placeholder="0.0"
                      className="flex-grow"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <BsCalendar2DateFill size={30} />
                    <DatePicker
                      label="When?"
                      className="flex-grow max-w-[284px]"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <p>Paid By</p>
                    <Button
                      color="secondary"
                      variant="faded"
                      onPress={() => setPaidByModalOpen(true)}
                    >
                      {selectedUser}
                    </Button>
                    <p>Split By</p>
                    <Button color="secondary" variant="faded">
                      equally
                    </Button>
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
      <PaidByModal
        isOpen={paidByModalOpen}
        onClose={() => setPaidByModalOpen(false)}
        selectedUser={selectedUser}
        onUserSelect={handleUserSelect}
      />
    </>
  );
};

export default AddExpenseModal;
