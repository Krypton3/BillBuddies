import React, { useState } from "react";
import "./Home.css";
import { Card, CardBody, Button, ButtonGroup, Input } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="w-screen p-8 flex home h-screen">
      <div className="left">
	  	<Card className="">
			<CardBody>
				<div className="card-content">
				<p className="dashboard-title">Dashboard</p>
				<div className="button-group">
					<Button color="secondary">Add Expense</Button>
					<Button color="secondary">Settle Up</Button>
				</div>
				</div>
			</CardBody>
		</Card>
        <div className="tables">
          <Card>
            <CardBody className="center-content">
              <h3>You Owe</h3>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
			<h3>You are Owed</h3>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;