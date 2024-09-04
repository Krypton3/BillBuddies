import React from "react";
import "./Home.css";
import { Card, CardBody } from "@nextui-org/react";

const Home = () => {
	return (
		<div className="w-screen p-8 flex home h-screen">
			<div className="left">
				<Card className="">
					<CardBody>
						<p>Make beautiful websites regardless of your design experience.</p>
					</CardBody>
				</Card>
				<div className="tables">
					<Card>
						<CardBody>
							<p>Table 1</p>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<p>Table 2</p>
						</CardBody>
					</Card>
				</div>
			</div>
			<Card>
				<CardBody>
					<p>Sidebar</p>
				</CardBody>
			</Card>
		</div>
	);
};

export default Home;
