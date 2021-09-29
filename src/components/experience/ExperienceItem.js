import React from "react";

function ExperienceItem(props) {
  const { id, company, city, state, position, start, end, description, display, edit, deleteExperience } = props;
  return (
    <div>
      <p>{start} - {end}</p>
      <h3>{position}</h3>
      <h4>{company}</h4>
      <p>{city}, {state}</p>
      <p>{description}</p>
      {display ? null : <button onClick={() => edit(id)}>Edit</button>}
      <button className="delete-button"  onClick={() => deleteExperience(id)}>Delete</button>
    </div>
  )
}

export default ExperienceItem;