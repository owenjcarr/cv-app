import React from "react" ;

function GeneralInfoSection(props) {
  const {info, edit} = props;
  return (
    <div>
      <h1>General Information</h1>
      <ul>
        <li>{props.info.firstName} {info.lastName}</li>
        <li>{info.email}</li>
        <li>{info.phone}</li>
      </ul>
      {info.display ? null : <button onClick={() => edit()}>Edit</button>}
    </div>
  )
  
}

export default GeneralInfoSection;