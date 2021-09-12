import React from "react" ;
import EducationSection from "./EducationSection";
import GeneralInfoSection from "./GeneralInfoSection";

function CV(props) {
  const {info, editGeneralInfo, editEducationInfo} = props;
  return (
    <div>
      <GeneralInfoSection info={info} edit={editGeneralInfo}/>
      <EducationSection info={info} edit={editEducationInfo}/>
    </div>
  )
  
}

export default CV;