import React from "react";
import PropTypes from "prop-types";
import { sortCategoriesBySkills } from "@utils/sortCategoriesBySkills"; // Import the utility function

const TechSkills = ({ techSkills }) => {
  // Sort the techSkills array using the utility function
  const sortedTechSkills = sortCategoriesBySkills([...techSkills]);

  return (
    <div className="mb-16">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedTechSkills.map((category, index) => (
          <div
            key={index}
            className="p-4 border rounded-md bg-white shadow-sm break-inside-avoid"
          >
            <h3 className="text-sm font-bold mb-3">{category.category}</h3>
            <ul className="flex flex-wrap">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="bg-[#016b5d] text-white text-[0.5rem] font-bold py-0.5 px-1 rounded-md mr-2 mb-2 transition-colors duration-200 hover:bg-[#f0f0f0] hover:text-gray-900 hover:border-gray-800 border border-transparent cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

TechSkills.propTypes = {
  techSkills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default TechSkills;
