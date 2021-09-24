import React from "react";
import GeneralForm from "./general/GeneralForm.js";
import EducationForm from "./education/EducationForm.js";
import ExperienceForm from "./experience/ExperienceForm.js";

function Form(props) {
  const { cvData, onChangeGeneral, onChangeEducation, onSubmitGeneral, onSubmitEducation, onChangeExperience, onSubmitExperience } = props;

  const educationForms = cvData.education.filter(education => education.display).map(education => 
    <EducationForm
      key={education.id}
      info={education}
      onChange={onChangeEducation}
      onSubmit={onSubmitEducation}
    />
  );

  const experienceForms = cvData.experience.filter(experience => experience.display).map(experience => 
    <ExperienceForm
      key={experience.id}
      info={experience}
      onChange={onChangeExperience}
      onSubmit={onSubmitExperience}
    />
  );

  return(
    <div>
      {
        cvData.general.display
        ?
          <GeneralForm
            info={cvData.general}
            onChange={onChangeGeneral}
            onSubmit={onSubmitGeneral}
          />
        : null
      }
      
      {educationForms}
      {experienceForms}
    </div>
  )
}

export default Form;