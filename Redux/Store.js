import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./Slices/ProfileSlice";
import deliveryBoys from "./Slices/GetDeliveryBoys";
import orderSlice from "./Slices/GetOrders";

export default configureStore({
  reducer: {
    profile: ProfileSlice,
    deliveryBoys: deliveryBoys,
    orders: orderSlice,
  },
});
