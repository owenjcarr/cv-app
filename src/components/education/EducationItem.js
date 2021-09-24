import React from "react" ;

function EducationItem(props) {
  const {id, schoolName, start, end, major, gpa, display, edit, deleteEducation} = props;

  return (
    <div>
      <h3>{schoolName}</h3>
      <p>{start} - {end}</p>
      <ul>
        <li>{major}</li>
        <li>{gpa}</li>
      </ul>
      {display ? null : <button onClick={() => edit(id)}>Edit</button>}
      <button onClick={() => deleteEducation(id)}>Delete</button>
    </div>
  )
  
}

export default EducationItem;