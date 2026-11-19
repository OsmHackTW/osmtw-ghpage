import React from "react";
import PropTypes from "prop-types";

// Mirrors the header's gutters and max width (layouts/header.js) so page content lines up with the logo.
export default function HeaderAligned({ className = "", children }) {
  return (
    <div className="px-2 lg:px-8">
      <div className={`max-w-7xl mx-auto px-2 md:px-4 ${className}`}>
        {children}
      </div>
    </div>
  );
}

HeaderAligned.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
