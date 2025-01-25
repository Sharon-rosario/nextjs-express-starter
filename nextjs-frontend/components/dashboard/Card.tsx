/** @format */

import React from "react";
import { LucideIcon } from "lucide-react"; // Ensure proper import for Lucide icons
import { cn } from "@/lib/utils"; // Assuming this is a utility function for conditional classes

// Define the CardProps type, which includes the label, icon, amount, and description.
export type CardProps = {
  label: string;
  icon: LucideIcon;  // 'icon' is a LucideIcon component
  amount: string;
  discription: string;
};

// Card component that takes CardProps
export default function Card(props: CardProps) {
  // Log the props to ensure the icon is being passed correctly
  console.log(props.icon);

  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* Display label */}
        <p className="text-sm">{props.label}</p>
        {/* Render the icon */}
        {props.icon ? (
          <props.icon className="h-4 w-4 text-gray-400" />
        ) : (
          <div>Icon not found</div> // Fallback if the icon is undefined
        )}
      </section>
      <section className="flex flex-col gap-1">
        {/* Display amount */}
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        {/* Display description */}
        <p className="text-xs text-gray-500">{props.discription}</p>
      </section>
    </CardContent>
  );
}

// CardContent component that takes HTML attributes and adds some styles
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",  // Default styles
        props.className  // Allows additional styles to be added via className prop
      )}
    />
  );
}
