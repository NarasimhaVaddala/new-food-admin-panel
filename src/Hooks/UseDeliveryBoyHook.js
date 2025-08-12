import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeliveryBoys } from "../../Redux/Slices/GetDeliveryBoys";
import {
  showAxiosError,
  showSuccessMessage,
} from "../../../deliery-boy/core/toast";
import { API } from "../../core/url";

export const useDeliveryBoyHook = () => {
  const dispatch = useDispatch();
  const { deliveryBoys, loading } = useSelector((state) => state.deliveryBoys);

  const [search, setSearch] = useState("");
  const [approved, setApproved] = useState(null);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    dispatch(fetchDeliveryBoys({ approved, search: debouncedSearch }));
  }, [approved, debouncedSearch, dispatch]);

  const approveOrReject = async (status, id) => {
    try {
      const resp = await API.put(`/admin/approve-or-reject/${id}`, { status });

      showSuccessMessage("Updated Success");

      dispatch(fetchDeliveryBoys({ approved, search: debouncedSearch }));
      setCurrentPerson(null);
    } catch (error) {
      showAxiosError(error);
    }
  };

  return {
    deliveryBoys,
    currentPerson,
    setCurrentPerson,
    search,
    setSearch,
    loading,
    approved,
    setApproved,
    approveOrReject,
  };
};
