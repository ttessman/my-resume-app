import React from "react";
import PropTypes from "prop-types";

const Summary = ({ summary }) => (
  <div className="summary mb-8">
    <h2 className="text-xl font-bold mb-4">Summary</h2>
    <p className="text-xs">{summary}</p>
  </div>
);

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Summary;
