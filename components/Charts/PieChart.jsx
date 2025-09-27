// PieChart.jsx
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
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
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#374151",
        bodyColor: "#6B7280",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "40%",
    elements: {
      arc: {
        borderWidth: 0,
        hoverBorderWidth: 3,
        hoverBorderColor: "#ffffff",
      },
    },
  };

  // Beautiful color schemes for Pie Chart
  const colorSchemes = {
    // Ocean Vibes
    ocean: [
      "#FF9500", // Orange - Pending
      "#007AFF", // Blue - Assigned
      "#34C759", // Green - Completed
      "#FF3B30", // Red - Cancelled
    ],

    // Sunset Gradient
    sunset: [
      "#FF9A8B", // Peach - Pending
      "#A8E6CF", // Light Green - Assigned
      "#FFD93D", // Golden Yellow - Completed
      "#FF6B6B", // Coral Red - Cancelled
    ],

    // Modern Purple
    purple: [
      "#667eea", // Purple Blue - Pending
      "#764ba2", // Deep Purple - Assigned
      "#f093fb", // Pink Purple - Completed
      "#f5576c", // Rose Red - Cancelled
    ],

    // Tech Modern
    tech: [
      "#667eea", // Blue - Pending
      "#f5576c", // Red - Assigned
      "#4facfe", // Light Blue - Completed
      "#EF4444", // Strong Red - Cancelled
    ],
  };

  const pieData = {
    labels: ["Pending", "Assigned", "Completed", "Cancelled"],
    datasets: [
      {
        data: data,
        backgroundColor: colorSchemes.ocean, // Change this to: sunset, purple, or tech
        borderWidth: 0,
        hoverOffset: 8,
        hoverBackgroundColor: [
          "#FF8C00", // Darker orange
          "#0056CC", // Darker blue
          "#28A745", // Darker green
          "#DC3545", // Darker red
        ],
      },
    ],
  };

  return (
    <div className="h-64 flex items-center justify-center">
      <Pie data={pieData} options={options} />
    </div>
  );
}
