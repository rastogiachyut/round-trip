import React from 'react';

export default function TimeFilter(props) {
  const { onInputChange, text, name } = props

  return (<fieldset className="filter">
    <legend>{text}</legend>
    <select name={name} onChange={onInputChange}>
      <option value="0">Anytime</option>
      <option value="1">Early (Before 8am)</option>
      <option value="2">Morning (8am - 12pm)</option>
      <option value="3">Afternoon (12pm - 4pm)</option>
      <option value="4">Evening (4pm - 8pm)</option>
      <option value="5">Night (After 8pm)</option>
    </select>
  </fieldset>)
}
