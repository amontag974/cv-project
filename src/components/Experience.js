import React from 'react';
import DetailInput from './DetailInput'

function Experience(props) {
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
        <h1>Experience</h1>
        {information}
        <button type="button" onClick={props.undoSubmit} id="btn-edit-experience">Edit</button>
      </div>
    );
    
  } else {
    section = (
      <form onSubmit={props.onSubmit} id="btn-submit-experience">
        <fieldset>
          <legend>Experience</legend>
          <DetailInput
            label="Company Name"
            detailKey="companyName"
            type="text"
            handleChange={props.onChange}
          />
          <DetailInput
            label="Position Title"
            detailKey="jobTitle"
            type="text"
            handleChange={props.onChange}
          />
          <DetailInput
            label="Position Description"
            detailKey="jobDescription"
            type="text"
            handleChange={props.onChange}
          />
          <DetailInput
            label="Start Date"
            detailKey="jobStartDate"
            type="date"
            handleChange={props.onChange}
          />
          <DetailInput
            label="End Date"
            detailKey="jobEndDate"
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

export default Experience;