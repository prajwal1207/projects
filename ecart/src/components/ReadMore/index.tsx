import React, { useState } from "react";

interface ReadMoreProps {
  children: string; // The content to display
  limit?: number; // The maximum number of characters to display before the ellipsis
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const content = isExpanded ? children : `${children.substring(0, limit)}...`;

  return (
    <div>
      <p>{content}</p>
      {children.length > limit && (
        <button
          onClick={handleToggle}
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
