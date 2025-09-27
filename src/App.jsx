import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import { ToastContainer } from "react-toastify";

import Layout from "./Layout/Layout";
import Dashboard from "./screens/Dashboard";
import DeliveryBoysList from "./screens/DeliveryBoysList";
import OrdersList from "./screens/OrdersList";
import ContactsList from "./screens/ContactsList";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/delivery-boys" element={<DeliveryBoysList />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/contact-list" element={<ContactsList />} />
        </Route>
      </Routes>
    </>
  );
}
