import React from 'react';

function DetailInput(props) {

  return (
    <div className="field-container">
      <label>{props.label} </label>
      <input id={props.detailKey} type={props.type} onChange={props.handleChange} value={props.value} required></input>
    </div>
  )
}

export default DetailInput;