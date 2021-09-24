import React from "react";
import GeneralForm from "./general/GeneralForm.js";
import EducationForm from "./education/EducationForm.js";

function Form(props) {
  const { cvData, onChangeGeneral, onChangeEducation, onSubmitGeneral, onSubmitEducation } = props;
  
  console.log(props);

  const educationForms = cvData.education.filter(education => education.display).map(education => 
    <EducationForm
      key={education.id}
      info={education}
      onChange={onChangeEducation}
      onSubmit={onSubmitEducation}
    />
  );

  return(
    <div>
      {
        cvData.generalInfo.display
        ?
          <GeneralForm
            info={cvData.generalInfo}
            onChange={onChangeGeneral}
            onSubmit={onSubmitGeneral}
          />
        : null
      }
      
      {educationForms}
    </div>
  )
}

export default Form;