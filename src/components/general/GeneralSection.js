import React from "react" ;

function GeneralInfoSection(props) {
  const {info, edit} = props;
  const general = info.general;
  return (
    <div className="gen-info">
      <div className="gen-header">
        <h1>General Information</h1>
        {general.display ? null : <button onClick={() => edit()}>Edit</button>}
      </div>
      <ul>
        <li>{general.firstName} {general.lastName}</li>
        <li>{general.email}</li>
        <li>{general.phone}</li>
      </ul>
    </div>
  )
  
}

export default GeneralInfoSection;