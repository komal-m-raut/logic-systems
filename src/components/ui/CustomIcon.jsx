"use client";

import React from "react";

const CustomIcon = ({ onClick, label, Icon }) => (
  <button
    type="button"
    aria-label={label}
    className="p-1 text-sm text-light hover:text-secondary focus:outline-none"
    onClick={onClick}
  >
    <Icon />
  </button>
);

export default CustomIcon;
