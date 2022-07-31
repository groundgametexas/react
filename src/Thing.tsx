import React from "react";

type ThingProps = {
  children: React.ReactNode;
};
export const Thing = ({ children }: ThingProps) => {
  return (
    // We are adding these classes here
    <div className="mt-10 bg-yellow-100 p-5 rounded-md">{children}</div>
  );
};
