// BarChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ data, total }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#374151",
        bodyColor: "#6B7280",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context) {
            const percentage = ((context.parsed.y / total) * 100).toFixed(1);
            return `${context.parsed.y} drivers (${percentage}%)`;
          },
        },
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
            size: 12,
            weight: "500",
          },
        },
      },
      y: {
        beginAtZero: true,
        max: total,
        grid: {
          color: "#F3F4F6",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: Math.max(1, Math.ceil(total / 10)),
          color: "#6B7280",
          font: {
            size: 11,
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 8,
        borderSkipped: false,
      },
    },
  };

  const labels = ["Active Drivers", "Inactive Drivers"];

  // Beautiful color schemes for Bar Chart
  const colorSchemes = {
    // Vibrant Duo
    vibrant: {
      colors: ["#FF6B6B", "#4ECDC4"],
      hover: ["#FF5252", "#26A69A"],
    },

    // Professional
    professional: {
      colors: ["#667eea", "#f5576c"],
      hover: ["#5a67d8", "#e53e3e"],
    },

    // Nature
    nature: {
      colors: ["#43e97b", "#38f9d7"],
      hover: ["#38d9a9", "#20c997"],
    },

    // Ocean
    ocean: {
      colors: ["#4facfe", "#00f2fe"],
      hover: ["#2196F3", "#00bcd4"],
    },

    // Sunset
    sunset: {
      colors: ["#FF9A8B", "#6BCF7F"],
      hover: ["#FF8A65", "#4CAF50"],
    },
  };

  // Change this to: vibrant, professional, nature, ocean, or sunset
  const currentScheme = colorSchemes.vibrant;

  const barData = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: currentScheme.colors,
        borderColor: currentScheme.colors,
        borderWidth: 0,
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: currentScheme.hover,
        hoverBorderWidth: 2,
        hoverBorderColor: "#ffffff",
        // Fix for gradient rendering
        borderCapStyle: "round",
        borderJoinStyle: "round",
      },
    ],
  };

  return (
    <div className="h-64">
      <Bar options={options} data={barData} />
    </div>
  );
}
