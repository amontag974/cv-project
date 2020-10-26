import React from 'react';
import DetailInput from './DetailInput'

function Education(props) {
  let section;
    
  if (props.information.submitted) {
    let information = Object.keys(props.information)
    .map( (key, index) => {
      if (key === "submitted") { return null }
      return <p key={index}>{key}: {props.information[key]}</p>
    })
    .filter( element => element !== null );  

    section = (
      <div>
        <h1>Education</h1>
        {information}
        <button type="button" onClick={props.undoSubmit} id="btn-edit-education">Edit</button>
      </div>
    );

  } else {
    section = (
      <form onSubmit={props.onSubmit} id="btn-submit-education">
        <fieldset>
          <legend>Education</legend>
          <DetailInput
            label="School Name"
            detailKey="schoolName"
            type="text"
            handleChange={props.onChange}
          />
          <DetailInput
            label="Degree/Title Earned"
            detailKey="titleOfStudy"
            type="text"
            handleChange={props.onChange}
          />
          <DetailInput
            label="Start Date"
            detailKey="schoolStartDate"
            type="date"
            handleChange={props.onChange}
          />
          <DetailInput
            label="End Date"
            detailKey="schoolEndDate"
            type="date"
            handleChange={props.onChange}
          />
          <button type="submit">Submit</button>
        </fieldset> 
      </form>   
    );
  }

  return section;
}

export default Education;