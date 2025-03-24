"use client";

import { useState } from "react";

// TextExpander component to show/hide content based on the state
function TextExpander({ children }) {
  // State to toggle text expansion
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children // Show full text if expanded
    : children.split(" ").slice(0, 40).join(" ") + "..."; // Show truncated text if not expanded

  return (
    <span className="text-sm sm:text-base">
      {displayText}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1 text-xs sm:text-sm" // Adjusted font size
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
