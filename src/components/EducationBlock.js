import React from "react" ;

function EducationBlock(props) {
  const {schoolName, start, end, major, gpa, edit} = props;

  return (
    <div>
      <h3>{schoolName}</h3>
      <p>{start} - {end}</p>
      <ul>
        <li>{major}</li>
        <li>{gpa}</li>
      </ul>
      <button onClick={() => edit()}>Edit</button>
    </div>
  )
  
}

export default EducationBlock;