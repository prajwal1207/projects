import React from "react";

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-8 h-8",
  color = "border-blue-500",
}) => {
  return (
    <div
      className={`inline-block ${size} border-4 ${color} border-t-transparent rounded-full animate-spin`}
      role="status"
    ></div>
  );
};

export default Spinner;
