import { fetchOrders } from "../../Redux/Slices/GetOrders";
import {
  showAxiosError,
  showSuccessMessage,
} from "../../../deliery-boy/core/toast";
import { API } from "../../core/url";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeliveryBoys } from "../../Redux/Slices/GetDeliveryBoys";

export const useOrdersHook = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const { deliveryBoys } = useSelector((state) => state.deliveryBoys);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [status, setstatus] = useState(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler); // Cleanup on change
    };
  }, [search]);

  // Fetch orders when debouncedSearch or assigned changes
  useEffect(() => {
    dispatch(fetchOrders({ search: debouncedSearch, status, paymentMode }));
  }, [debouncedSearch, status, dispatch, paymentMode]);

  // Fetch delivery boys once
  useEffect(() => {
    dispatch(fetchDeliveryBoys({ approved: true, isDelivering: false }));
  }, [dispatch]);

  const assignDeliveryBoy = async () => {
    try {
      const resp = await API.put(
        `/admin/assign-delivery-boy/${selectedOrder._id}/${selectedPerson}`
      );
      console.log(resp.data);
      showSuccessMessage("Assigned successfully");
      setSelectedOrder(null);
      setSelectedPerson(null);
    } catch (error) {
      showAxiosError(error);
    }
  };

  return {
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
  };
};
