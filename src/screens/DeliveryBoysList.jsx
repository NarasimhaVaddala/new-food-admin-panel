import React from "react";
import DisplayUser from "../../components/DeliveryBoys/DisplayUser";
import DeliveryBoyListTable from "../../components/Tables/DeliveryBoyListTable";
import { useDeliveryBoyHook } from "../Hooks/UseDeliveryBoyHook";
import CustomInputForState from "../../components/CustomInputForState";
import { Loader2 } from "lucide-react";
import CustomSelectForState from "../../components/CustomSelectForState";

export default function DeliveryBoysList() {
  const {
    deliveryBoys,
    currentPerson,
    setCurrentPerson,
    search,
    setSearch,
    loading,
    approved,
    setApproved,
    approveOrReject,
  } = useDeliveryBoyHook();

  return (
    <div className="flex">
      <div className="w-[70%]">
        <div className="flex w-full gap-2 p-2">
          <CustomInputForState
            value={search}
            placeholder={"Search by name or mobile or email"}
            setValue={(e) => setSearch(e.target.value)}
            className={"w-[70%]"}
          />

          <CustomSelectForState
            className={"w-[30%]"}
            options={[
              {
                value: true,
                label: "Approved",
              },

              {
                value: false,
                label: "Not Approved",
              },
            ]}
            value={approved}
            setValue={setApproved}
          />
        </div>

        {loading ? (
          <div className="flex mt-6 items-center justify-center">
            <Loader2 />
          </div>
        ) : (
          <DeliveryBoyListTable
            data={deliveryBoys}
            onClick={setCurrentPerson}
          />
        )}
      </div>
      {currentPerson && (
        <DisplayUser user={currentPerson} approveOrReject={approveOrReject} />
      )}
    </div>
  );
}
