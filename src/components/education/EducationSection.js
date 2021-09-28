import React from "react" ;
import EducationItem from "./EducationItem";

function EducationSection(props) {
  const {info, edit, deleteEducation, addEducation} = props;
  const educationList = info.education;
  const educationListComponents = educationList.map(education => {
    return (
      <EducationItem
        key = {education.id} 
        id = {education.id}
        schoolName = {education.schoolName}
        start = {education.start}
        end = {education.end}
        major = {education.major}
        gpa = {education.gpa}
        display = {education.display}
        edit = {edit}
        deleteEducation = {deleteEducation}
      />
    )
  })

  return (
    <div>
      <div className="edu-header">
        <h1>Education</h1>
        <button onClick={() => addEducation()}>Add</button>
      </div>
      {educationListComponents}
    </div>
  )
  
}

export default EducationSection;