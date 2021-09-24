import React from "react" ;
import EducationSection from "./education/EducationSection";
import GeneralInfoSection from "./general/GeneralSection";

function CV(props) {
  const {cvData, editGeneral, editEducation} = props;
  return (
    <div>
      <GeneralInfoSection info={cvData} edit={editGeneral}/>
      <EducationSection info={cvData} edit={editEducation}/>
    </div>
  )
  
}

export default CV;