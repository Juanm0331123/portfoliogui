"use client";

import React from "react";

interface ButtonsCardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const ButtonsCard: React.FC<ButtonsCardProps> = ({
  children,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="p-4">{children}</div>
        <div className="text-xs text-gray-500">Click para copiar</div>
      </div>
    </div>
  );
};
