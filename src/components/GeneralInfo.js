import React from 'react';
import DetailInput from './DetailInput'

function GeneralInfo(props) {
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
        <h1>General Information</h1>
        {information}
        <button type="button" onClick={props.undoSubmit} id="btn-edit-generalInfo">Edit</button>
      </div>
    );

  } else {
    section = (
      <form onSubmit={props.onSubmit} id="btn-submit-generalInfo">
        <fieldset>
          <legend>General Information</legend>
          <DetailInput
            label="First Name"
            detailKey="firstName"
            type="text"
            value={props.information.firstName}
            handleChange={props.onChange}
          />
          <DetailInput
            label="Last Name"
            detailKey="lastName"
            type="text"
            value={props.information.lastName}
            handleChange={props.onChange}
          />
          <DetailInput
            label="Email Address"
            detailKey="email"
            type="email"
            value={props.information.email}
            handleChange={props.onChange}
          />
          <DetailInput
            label="Phone Number"
            detailKey="phoneNumber"
            type="tel"
            value={props.information.phoneNumber}
            handleChange={props.onChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }

  return section;
}

export default GeneralInfo;