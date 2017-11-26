import React from 'react';

export default function AirlinesFilter(props) {
  const flights = [{
      value: 'AI',
      name: "Air India",
    }, {
      value: 'IC',
      name: "Air India IC",
    }, {
      value: 'G8',
      name: "GoAir",
    }, {
      value: '6E',
      name: "IndiGo",
    }, {
      value: '9W',
      name: "Jet Airways",
    }, {
      value: 'S2',
      name: "Jet Airways Konnect",
    }, {
      value: 'IT',
      name: "JetLite",
    }, {
      value: 'SG',
      name: "Kingfisher",
    }, {
      value: '9W-K',
      name: "Kingfisher Red",
    }, {
      value: 'IT-RED',
      name: "SpiceJet"
  }]
  return (<fieldset className="filter stations">
    <legend>Preferred Airlines</legend>
    {flights.map(flight => (
      <label key={flight.value} htmlFor={flight.value}>
        <input onChange={props.onChange} id={flight.value} type="checkbox" value={flight.value} name="airline_codes"/>
        <span className={`airlogo f${flight.value}`}></span><span>{flight.name}</span>
      </label>    
    ))}
  </fieldset>)
}
