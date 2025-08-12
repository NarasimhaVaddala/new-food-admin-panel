import CustomButton from "../CustomButton";
import Table, { Cell, Row } from "../TableUi/Table";
import { Eye } from "lucide-react";
export default function OrderTable({ data, onclick }) {
  return (
    <div>
      <Table
        headings={[
          "S.No",
          "Order Id",
          "No Of Items",
          "Customer Name",
          "Mobile",
          "Price",
        ]}
      >
        {data?.map((e, index) => {
          return (
            <Row key={index}>
              <Cell>{index + 1}</Cell>
              <Cell>{e._id}</Cell>
              <Cell>{e.items.length}</Cell>
              <Cell>{e.user?.name}</Cell>
              <Cell>{e.user?.mobile}</Cell>
              <Cell>{e.totalPrice}</Cell>
              <Cell>
                <CustomButton
                  onClick={() => onclick(e)}
                  text="View"
                  icon={<Eye />}
                  type="button"
                />
              </Cell>
            </Row>
          );
        })}
      </Table>
    </div>
  );
}
