import React from "react";
import CustomInputForState from "../CustomInputForState";
import CustomSelectForState from "../CustomSelectForState";

export default function Filters({
  search,
  setSearch,
  status,
  setstatus,
  paymentMode,
  setPaymentMode,
  date,
  setDate,
}) {
  return (
    <div className="space-y-1">
      <CustomInputForState
        value={search}
        placeholder={"Search Using customer name or mobile"}
        setValue={(e) => setSearch(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <CustomInputForState
          value={date}
          type="date"
          placeholder={"Search Using customer name or mobile"}
          setValue={(e) => setDate(e.target.value)}
        />
        <CustomSelectForState
          value={status}
          setValue={setstatus}
          placeholder="Select Order Status"
          options={[
            { label: "Accepted", value: "accepted" },
            { label: "Pending", value: "pending" },
            { label: "Completed", value: "completed" },
            { label: "Cancelled", value: "cancelled" },
          ]}
        />

        <CustomSelectForState
          value={paymentMode}
          placeholder="Select Payment Mode"
          setValue={setPaymentMode}
          options={[
            { label: "Cash", value: "cash" },
            { label: "Upi", value: "upi" },
          ]}
        />
      </div>
    </div>
  );
}
