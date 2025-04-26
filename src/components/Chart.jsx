import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../assets/data";

// Updated colors to match dashboard UI
const COLORS = ["#f87171", "#fde047", "#4ade80", "#67e8f9"]; // Red-300, Yellow-300, Green-300, Cyan-300

export const Chart = () => {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="total"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
