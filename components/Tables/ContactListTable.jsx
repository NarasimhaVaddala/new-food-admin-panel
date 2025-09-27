import React from "react";
import Table, { Cell, Row } from "../TableUi/Table";
import CustomButton from "../CustomButton";
import { ArrowRight } from "lucide-react";

export default function ContactListTable({ data, onClick }) {
  return (
    <div>
      <Table headings={["Name", "Mobile", "Email", "Message"]}>
        {data?.map((e, index) => {
          return (
            <Row key={index}>
              <Cell>{e.name}</Cell>
              <Cell>{e.mobile}</Cell>
              <Cell>{e.email}</Cell>
              <Cell>{e.message}</Cell>
            </Row>
          );
        })}
      </Table>
    </div>
  );
}
