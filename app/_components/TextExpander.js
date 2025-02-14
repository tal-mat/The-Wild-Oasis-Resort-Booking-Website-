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
    <span>
      {displayText} {/* Button to toggle the expansion of the text */}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
