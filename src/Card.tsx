import type React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}
export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded border border-slate-200 bg-white p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
