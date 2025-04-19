import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { chartData } from "../assets/data";

// Updated colors to match dashboard UI
const COLORS = ["#f87171", "#fde047", "#4ade80", "#67e8f9"]; // Red-300, Yellow-300, Green-300, Cyan-300

export const Chart = () => {
  return (
    <ResponsiveContainer width={"90%"} height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='total'>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
