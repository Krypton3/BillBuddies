import React from "react";
import "../styling/Home.css";
import { Card, CardBody, Button, useDisclosure } from "@nextui-org/react";
import AddExpenseModal from "../modals/AddExpenseModal";
import SettleUpModal from "../modals/SettleUpModal";
import BillSummary from "../components/BillSummary";
import GroupSummary from "../components/GroupSummary";
import FriendSummary from "../components/FriendSummary";

const Home = () => {
  const { isOpen: isAddExpenseOpen, onOpen: onAddExpenseOpen, onOpenChange: onAddExpenseChange } = useDisclosure();
  const { isOpen: isSettleUpOpen, onOpen: onSettleUpOpen, onOpenChange: onSettleUpChange } = useDisclosure();

  return (
    <div className="home">
      <div className="left">
        <Card>
          <CardBody>
            <div className="card-content">
              <p className="dashboard-title">Dashboard</p>
              <div className="button-group">
                <Button color="secondary" onPress={onAddExpenseOpen}>Add Expense</Button>
                <AddExpenseModal isOpen={isAddExpenseOpen} onOpenChange={onAddExpenseChange} />
                <Button color="secondary" onPress={onSettleUpOpen}>Settle Up</Button>
                <SettleUpModal isOpen={isSettleUpOpen} onOpenChange={onSettleUpChange} />
              </div>
            </div>
          </CardBody>
        </Card>
        <div className="tables">
          <Card>
            <CardBody className="center-content">
              <h3>You Owe</h3>
              <BillSummary /> 
            </CardBody>
          </Card>
          <Card>
            <CardBody className="center-content">
              <h3>You are Owed</h3>
			  <BillSummary /> 
            </CardBody>
          </Card>
        </div>
		<div className="tables">
          <Card>
            <CardBody>
			<div className="card-content">
				<p className="groups-title">Groups</p>
				<div className="button-group">
					<Button color="secondary" className="add-groups-button">Add Groups</Button>
				</div>
			</div>
              <GroupSummary />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
			<div className="card-content">
				<p className="friends-title">Friends</p>
				<div className="button-group">
					<Button color="secondary" className="add-friends-button">Add Friends</Button>
				</div>
			</div>
              <FriendSummary />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
