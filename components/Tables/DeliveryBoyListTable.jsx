import React from "react";
import Table, { Cell, Row } from "../TableUi/Table";
import CustomButton from "../CustomButton";
import { ArrowRight } from "lucide-react";

export default function DeliveryBoyListTable({ data, onClick }) {
  return (
    <div>
      <Table headings={["Name", "Mobile", "Email", "Status", "Action"]}>
        {data?.map((e, index) => {
          console.log(e.approved);

          return (
            <Row key={index}>
              <Cell>{e.name}</Cell>
              <Cell>{e.mobile}</Cell>
              <Cell>{e.email}</Cell>
              <Cell>{e.approved ? "Approved" : "Pending / Rejected"}</Cell>
              <Cell>
                <CustomButton
                  onClick={() => onClick(e)}
                  text="View"
                  type="button"
                  icon={<ArrowRight />}
                />
              </Cell>
            </Row>
          );
        })}
      </Table>
    </div>
  );
}
