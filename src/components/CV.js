import React from "react" ;
import GeneralInfoSection from "./GeneralInfoSection";

function CV(props) {
  const {info, edit} = props;
  return (
    <div>
      <GeneralInfoSection info={info} edit={edit}/>
    </div>
  )
  
}

export default CV;