import React from 'react'

function DisplayedData(props) {
  const { title } = props.information;
  const fields = props.fields;

  let data = fields.map( (field, index) => {
    return <p key={index}>{props.createLabel(field)}: {props.information[field].value}</p>
  });

  return (
    <div>
      <h1>{title}</h1>
      {data}
      <button type="button" onClick={props.undoSubmit} id="btn-edit-generalInfo">Edit</button>
    </div>
  );
}

export default DisplayedData;