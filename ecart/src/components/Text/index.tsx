import React from "react";

interface TextProps {
  content: string;
  size?: string; // Accepts font size, e.g., "16px", "1rem"
  color?: string; // Accepts color values, e.g., "red", "#333"
}

const Text: React.FC<TextProps> = ({ content, size = "16px", color = "#000" }) => {
  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <p
      style={{
        fontSize: size || "16px", // Default size
        color: color || "#000",   // Default color
        fontWeight: "bold",
      }}
    >
      {capitalizeFirstLetter(content)}
    </p>
  );
};

export default Text;
