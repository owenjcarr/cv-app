import React from "react" ;
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
import GeneralInfoSection from "./general/GeneralSection";

function CV(props) {
  const {cvData, editGeneral, editEducation, deleteEducation, addEducation, editExperience, deleteExperience, addExperience} = props;
  return (
    <div>
      <GeneralInfoSection
        info={cvData}
        edit={editGeneral}
      />
      <EducationSection 
        info={cvData} 
        edit={editEducation}
        deleteEducation={deleteEducation}
        addEducation={addEducation}
      />
      <ExperienceSection 
        info={cvData} 
        edit={editExperience}
        deleteExperience={deleteExperience}
        addExperience={addExperience}
      />
    </div>
  )
  
}

export default CV;