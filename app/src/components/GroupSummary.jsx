import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const GroupSummary = () => {
  return (
    <Table aria-label="Group Summary Table">
      <TableHeader>
        <TableColumn>Group Name</TableColumn>
        <TableColumn>Group Members</TableColumn>
        <TableColumn>You Owe</TableColumn>
        <TableColumn>You are Owed</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Group A</TableCell>
          <TableCell>John, Jane, Doe</TableCell>
          <TableCell>$50</TableCell>
          <TableCell>$30</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Group B</TableCell>
          <TableCell>Alice, Bob, Charlie</TableCell>
          <TableCell>$75</TableCell>
          <TableCell>$40</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Group C</TableCell>
          <TableCell>David, Eva, Frank</TableCell>
          <TableCell>$20</TableCell>
          <TableCell>$60</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Group D</TableCell>
          <TableCell>George, Hannah, Ian</TableCell>
          <TableCell>$100</TableCell>
          <TableCell>$90</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default GroupSummary;