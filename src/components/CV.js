import React from "react" ;

function CV(props) {
  const {info, edit} = props;
  return (
    <div>
      <h1>Contact Information</h1>
      <ul>
        <li>{info.firstName} {info.lastName}</li>
        <li>{info.email}</li>
        <li>{info.phone}</li>
      </ul>
      {info.display ? null : <button onClick={() => edit()}>Edit</button>}
    </div>
  )
  
}

export default CV;