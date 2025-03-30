"use client";

import { useState } from "react";

// TextExpander component to show/hide content based on the state
function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <div className="flex flex-col">
      <span className="text-sm">{displayText}</span>
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1 text-xs self-start mt-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default TextExpander;
