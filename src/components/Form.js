import React from "react";
import GeneralForm from "./general/GeneralForm.js";
import EducationForm from "./education/EducationForm.js";

function Form(props) {
  const { cvData, handleGeneralInfoChange, handleEducationInfoChange, onSubmitGeneral, onSubmitEductaion } = props;
  
  const educationForms = cvData.education.filter(education => education.display).map(education => 
    <EducationForm
      key={education.id}
      info={education}
      onInfoChange={handleEducationInfoChange}
      onSubmit={onSubmitEductaion}
    />
  );

  return(
    <div>
      {
        cvData.generalInfo.display
        ?
          <GeneralForm
            info={cvData.generalInfo}
            onInfoChange={handleGeneralInfoChange}
            onSubmit={onSubmitGeneral}
          />
        : null
      }
      
      {educationForms}
    </div>
  )
}

export default Form;