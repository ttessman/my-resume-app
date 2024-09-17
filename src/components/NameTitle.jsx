import React from "react";
import PropTypes from "prop-types";

const NameTitle = ({ name, title }) => (
  <div className="name-title mb-4">
    <h1 className="text-4xl font-bold">{name}</h1>
    <h2 className="text-xl">{title}</h2>
  </div>
);

NameTitle.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NameTitle;
