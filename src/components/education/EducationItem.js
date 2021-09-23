import React from "react" ;

function EducationItem(props) {
  const {schoolName, start, end, major, gpa} = props;

  return (
    <div>
      <h3>{schoolName}</h3>
      <p>{start} - {end}</p>
      <ul>
        <li>{major}</li>
        <li>{gpa}</li>
      </ul>
    </div>
  )
  
}

export default EducationItem;