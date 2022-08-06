import React from "react";
import "../tw.css";
type ThingProps = {
  children: React.ReactNode;
};
export const Thing = ({ children }: ThingProps) => {
  return (
    <div className="mt-10 bg-scale-marigold-100 p-5 rounded-md">{children}</div>
  );
};
