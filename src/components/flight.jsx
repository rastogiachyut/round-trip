import React, { Component } from 'react';

class Flight extends Component {
  render() {
    const { selectFlight, selected, flight } = this.props
    const {
      iconClass,
      name,
      duration,
      tripFare,
      fare,
    } = flight
    let { departs, arrives } = flight
    arrives = new Date(arrives)
    departs = new Date(departs)
    return (
      <li className={selected ? "selected" : ""} onClick={() => selectFlight(flight)}>
        <div className={"flight-icons " + iconClass}>
        </div>
        <div className="flight-details">
          <div className="time">{`${arrives.getHours()}:${arrives.getMinutes()} - ${departs.getHours()}:${departs.getMinutes()}`}</div>
          <div className="name">{name}</div>
          <div className="duration">{duration}</div>
        </div>
        <div className="trip-fare">{tripFare}</div>
        <div className="fare">{fare}</div>
        <div className="departs">{departs.getTime()}</div>
        <div className="arrives">{arrives.getTime()}</div>
        <div className="cb"><span className="cbid">{flight.cb}</span></div>
      </li>
    )
  }
}

export default Flight;