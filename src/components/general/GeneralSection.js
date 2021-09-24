import React from "react" ;

function GeneralInfoSection(props) {
  const {info, edit} = props;
  const generalInfo = info.generalInfo;
  return (
    <div>
      <h1>General Information</h1>
      <ul>
        <li>{generalInfo.firstName} {generalInfo.lastName}</li>
        <li>{generalInfo.email}</li>
        <li>{generalInfo.phone}</li>
      </ul>
      {generalInfo.display ? null : <button onClick={() => edit()}>Edit</button>}
    </div>
  )
  
}

export default GeneralInfoSection;