// LineChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#374151",
        bodyColor: "#6B7280",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 11,
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    elements: {
      point: {
        hoverRadius: 8,
        hoverBorderWidth: 3,
      },
    },
  };

  const labels = data?.map((e) => {
    const date = new Date(e.date);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Completed Orders",
        data: data?.map((e) => e.completed),
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        tension: 0.4,
        borderWidth: 3,
      },
      {
        label: "Cancelled Orders",
        data: data?.map((e) => e.cancelled),
        borderColor: "#F59E0B",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "#F59E0B",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="h-80">
      <Line options={options} data={chartData} />
    </div>
  );
}
