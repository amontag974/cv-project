import React from 'react'

function DisplayedData(props) {
  const { title } = props.information;
  const fields = props.fields;

  let data = fields.map( (field, index) => {
    return <p key={index}><span className="display-label">{props.createLabel(field)}:</span> {props.information[field].value}</p>
  });

  return (
    <div className="displayed-data">
      <h1>{title}</h1>
      {data}
      <button type="button" onClick={props.undoSubmit} id={`btn-edit-${props.information.sectionID}`}>Edit</button>
    </div>
  );
}

export default DisplayedData;