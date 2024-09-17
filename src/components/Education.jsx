import React from "react";
import PropTypes from "prop-types";

const Education = ({ education }) => {
  if (!education || education.length === 0) {
    return <div>No education information available.</div>;
  }

  return (
    <div className="education-section mb-8">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item mb-4">
          <h3 className="text-lg font-medium mb-1">{edu.degree}</h3>
          <p className="text-sm text-gray-600">
            <span className="institution">{edu.institution}</span>
            <span className="after:content-['|'] after:mx-2" />
            <span className="location">{edu.location}</span>
            <span className="after:content-['|'] after:mx-2" />
            <span className="dates">
              {edu.startDate} - {edu.endDate}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;
