// Dashboard.jsx
import React from "react";
import PieChart from "../../components/Charts/PieChart";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "../../components/Charts/BarChart";
import { useState } from "react";

import { API } from "../../core/url";
import { showAxiosError } from "../../core/toast";
import { useEffect } from "react";

export default function Dashboard() {
  const [pieData, setpieData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [lineData, setlineData] = useState(null);

  const [driverCount, setDriverCount] = useState(0);

  async function getData() {
    try {
      const resp = await API.get("/admin/analytics");

      const { orderStatus, driverStatus, last7DaysOrders } = resp.data;

      const orderArray = [
        orderStatus.pending,
        orderStatus.accepted,
        orderStatus.completed,
        orderStatus.cancelled,
      ];

      const driverArray = [driverStatus.true, driverStatus.false];

      setDriverCount(driverStatus.true + driverStatus.false);

      setpieData(orderArray);
      setBarData(driverArray);
      setlineData(last7DaysOrders);

      console.log(resp.data);
    } catch (error) {
      showAxiosError(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time insights into your operations
          </p>
        </div>

        {/* Top Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Pie Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Today's Orders Status
              </h2>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <PieChart data={pieData} />
          </div>

          {/* Bar Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Drivers Status
              </h2>
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Total: {driverCount}
              </div>
            </div>
            <BarChart data={barData} total={driverCount} />
          </div>
        </div>

        {/* Line Chart Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Order Trends for last 7 Days
            </h2>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Last 7 Days
            </div>
          </div>
          <LineChart data={lineData} />
        </div>
      </div>
    </div>
  );
}
