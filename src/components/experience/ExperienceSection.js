import React from "react";
import ExperienceItem from "./ExperienceItem";

function ExperienceSection(props) {
  const {info, edit, deleteExperience, addExperience} = props;
  const experienceList = info.experience;
  const educationListComponents = experienceList.map(experience => {
    return (
      <ExperienceItem
        key={experience.id}
        id={experience.id}
        company={experience.company}
        city={experience.city}
        state={experience.state}
        position={experience.position}
        start={experience.start}
        end={experience.end}
        description={experience.description}
        display={experience.display}
        edit={edit}
        deleteExperience={deleteExperience}
      />
    )
  })

  return (
    <div>
      <div className="exp-header">
        <h1>Experience</h1>
        <button onClick={() => addExperience()}>Add</button>
      </div>
      {educationListComponents}
    </div>
  )
}

export default ExperienceSection;