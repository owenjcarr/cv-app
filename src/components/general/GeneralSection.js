import React from "react" ;

function GeneralInfoSection(props) {
  const {info, edit} = props;
  const general = info.general;
  return (
    <div>
      <h1>General Information</h1>
      <ul>
        <li>{general.firstName} {general.lastName}</li>
        <li>{general.email}</li>
        <li>{general.phone}</li>
      </ul>
      {general.display ? null : <button onClick={() => edit()}>Edit</button>}
    </div>
  )
  
}

export default GeneralInfoSection;