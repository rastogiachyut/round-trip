import React, { Component } from 'react';
import AirlinesFilter from './airlinesFilter'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
import TimeFilter from './timeFilter'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      airline_codes: {},
      departureTime: '',
      returnTime: ''
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.filterFlights = this.filterFlights.bind(this)
  }

  filterFlights(e) {
    e.preventDefault();
    let filters = Object.assign({}, this.state)
    this.props.setFilters(filters)
    this.props.toggleFilter()
    console.log("setFilters fired??!")
  }

  onInputChange(event) {
    const target = event.target;
    if (target.type === 'checkbox') {
      let codes = Object.assign({}, this.state.airline_codes)
      const airline_codes = {...codes, ...{[target.value]: target.checked}}
      this.setState({
        airline_codes: airline_codes
      }, () => {console.log(this.state)});
    } else {
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      }, () => {console.log(this.state)});
    }
  }

  render() {
    return (
      <form id="filter">
        <br/>
        <div className="settingsArea">
          <AirlinesFilter onChange={this.onInputChange} />
          <TimeFilter
            name={"departureTime"}
            onInputChange={this.onInputChange}
            text={"Departure time"}
          />
          <TimeFilter
            name={"returnTime"}
            onInputChange={this.onInputChange}
            text={"Return time"}
          />
        </div>
        <p className="action"><button type="submit" id="applyFilter" onClick={this.filterFlights}>Filter flights</button></p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    setFilters: (filters) => {
      dispatch(searchActions.setFilters(filters));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);