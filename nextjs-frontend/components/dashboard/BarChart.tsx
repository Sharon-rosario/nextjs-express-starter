"use client";
import React, { useEffect } from "react";
import { BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";
import { useTheme } from "next-themes";

// Dummy data for the chart
const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

export default function BarChart() {
  const { theme } = useTheme(); // Get the current theme (light, dark, system)

  // Determine the color for the bars based on the theme
  // const barColor = theme === "dark" ? "#ffffff" : "#4caf50"; // White for dark mode, green for light mode
  const barColor = theme === "dark" ? "#ffffff" : "#111111"; // White for dark mode, green for light mode

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey={"total"}
          radius={[4, 4, 0, 0]} // Rounded corners on top
          fill={barColor} // Dynamically change the color of the bars
        />
      </BarGraph>
    </ResponsiveContainer>
  );
}