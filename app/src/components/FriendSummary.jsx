import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const FriendsSummary = () => {
  return (
    <Table aria-label="Friends Summary Table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Group</TableColumn>
        <TableColumn>You Owe</TableColumn>
        <TableColumn>You are Owed</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>John</TableCell>
          <TableCell>Group A</TableCell>
          <TableCell>$20</TableCell>
          <TableCell>$10</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Jane</TableCell>
          <TableCell>Group B</TableCell>
          <TableCell>$30</TableCell>
          <TableCell>$50</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Bob</TableCell>
          <TableCell>Group C</TableCell>
          <TableCell>$15</TableCell>
          <TableCell>$25</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Alice</TableCell>
          <TableCell>Group D</TableCell>
          <TableCell>$40</TableCell>
          <TableCell>$30</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FriendsSummary;