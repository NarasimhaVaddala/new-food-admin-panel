import Filters from "../../components/orders/Filters";
import OrderItemsModal from "../../components/orders/OrderPopup";
import OrderTable from "../../components/Tables/OrderTable";
import { useOrdersHook } from "../Hooks/UseOrdersHook";

export default function OrdersList() {
  const {
    orders,
    selectedOrder,
    setSelectedOrder,
    selectedPerson,
    setSelectedPerson,
    deliveryBoys,
    assignDeliveryBoy,
    search,
    setSearch,
    status,
    setstatus,
    paymentMode,
    setPaymentMode,
  } = useOrdersHook();

  return (
    <div>
      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setstatus={setstatus}
        paymentMode={paymentMode}
        setPaymentMode={setPaymentMode}
      />
      <OrderTable data={orders} onclick={setSelectedOrder} />
      {selectedOrder && (
        <OrderItemsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          setSelectedPerson={setSelectedPerson}
          deliveryBoys={deliveryBoys}
          onClick={assignDeliveryBoy}
        />
      )}
    </div>
  );
}
