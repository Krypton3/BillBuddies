import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const BillSummary = () => {
  const dummyData = [
    { name: "John Doe", amount: "$100", group: "Group A" },
    { name: "Jane Smith", amount: "$50", group: "Group B" },
    { name: "Alice Johnson", amount: "$75", group: "Group C" },
    { name: "Bob Brown", amount: "$30", group: "Group D" },
  ];

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>Amount</TableColumn>
        <TableColumn>Group</TableColumn>
      </TableHeader>
      <TableBody>
        {dummyData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.group}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BillSummary;
