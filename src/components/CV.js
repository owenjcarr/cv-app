import React from "react" ;
import EducationSection from "./education/EducationSection";
import GeneralInfoSection from "./general/GeneralSection";

function CV(props) {
  const {cvData, editGeneral, editEducation, deleteEducation, addEducation} = props;
  return (
    <div>
      <GeneralInfoSection info={cvData} edit={editGeneral}/>
      <EducationSection 
        info={cvData} 
        edit={editEducation}
        deleteEducation={deleteEducation}
        addEducation={addEducation}
      />
    </div>
  )
  
}

export default CV;