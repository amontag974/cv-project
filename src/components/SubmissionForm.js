import React from 'react'
import DetailInput from './DetailInput';


function SubmissionForm(props) {
  const { title, sectionID } = props.information;
  const fields = props.fields;
  let inputs = fields.map( (field, index) => {
    return (
      <DetailInput 
        key={index}
        label={props.createLabel(field)}
        detailKey={field}
        type={props.information[field].type}
        value={props.information[field].value}
        handleChange={props.onChange}
      />
    );
  });

  return (
    <div>
      <form onSubmit={props.onSubmit} id={`form-${sectionID}`}>
        <fieldset>
          <legend>{title}</legend>
            {inputs}
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default SubmissionForm;