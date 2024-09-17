import React from "react";
import NameTitle from "@components/NameTitle";
import ContactInfo from "@components/ContactInfo";
import Summary from "@components/Summary";
screen;
import WorkExperience from "@components/WorkExperience";
import TechSkills from "@components/TechSkills";
import Education from "@components/Education";
import data from "@assets/data/data.json";

const App = () => {
  return (
    <div className="relative container mx-auto p-4 md:pl-0 xl:pl-4 after:content-[''] md:after:absolute after:-left-[4rem] after:bg-[#016b5d] after:h-full after:w-[2px] after:top-0 after:translate-x-[calc(0.875rem+15px)] after:z-[-1]">
      <div className="mt-16">
        <NameTitle name={data.name} title={data.title} />
        <ContactInfo contact={data.contact} />
      </div>
      <Summary summary={data.summary} />
      <WorkExperience workExperience={data.workExperience} />
      <Education education={data.education} />
      <TechSkills techSkills={data.techSkills} />
    </div>
  );
};

export default App;
