import React from "react";
import PropTypes from "prop-types";
import { convertDateToText } from "@utils/dateUtils";

const WorkExperience = ({ workExperience }) => {
  if (!workExperience || workExperience.length === 0) {
    return <p>No work experience available</p>;
  }

  return (
    <section className="relative mb-8">
      <h2 className="text-xl font-bold mb-4">Work History</h2>

      <div className="relative">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className={`break-inside-avoid mb-4 relative md:before:content-[''] md:before:absolute md:before:left-[calc(-4rem+16px)] xl:before:left-[-4rem] md:before:top-2 md:before:w-7 md:before:h-7 md:before:rounded-full z-10 ${
              job.endDate.toLowerCase() === "current"
                ? "md:before:border-4 md:before:border-[#016b5d] md:before:bg-white"
                : "md:before:bg-[#016b5d]"
            }`}
          >
            <h3>
              <span className="text-lg font-bold text-[#016b5d]">
                {job.company}
              </span>
              <span className="after:content-['|'] after:mx-2 text-lg italic relative top-[0.125rem]" />
              <span className="text-sm italic">
                {job.location}
                <span className="after:content-['|'] after:mx-2 text-lg italic relative top-[0.125rem]" />
                {convertDateToText(job.startDate)} -{" "}
                {convertDateToText(job.endDate)}
              </span>
            </h3>
            <p className="text-sm font-semibold italic">{job.title}</p>
            <ul className="list-disc list-inside text-xs mt-2 pl-4 pr-4">
              {job.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

WorkExperience.propTypes = {
  workExperience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default WorkExperience;
