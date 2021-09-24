import React from "react" ;
import EducationItem from "./EducationItem";

function EducationSection(props) {
  const {info, edit, deleteEducation} = props;
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
      <h1>Education</h1>
      {educationListComponents}
    </div>
  )
  
}

export default EducationSection;