"use client";

// components/ui/Icon.jsx
import React from "react";

const Icon = ({ name, className, onClick, label }) => {
  // Assuming usage of Font Awesome icons as an example
  const iconClass = `fa ${name} ${className}`;

  // Function to handle key down events, triggering onClick for Enter and Space keys
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick(event);
    }
  };

  return (
    <button type="button" aria-label="Twitter" className="text-light">
      <i
        className={iconClass}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="button"
        aria-label={label}
      />
    </button>
  );
};

export default Icon;
