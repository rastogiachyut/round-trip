import React, { Component } from 'react';
import SortBy from './sortBy'
import Flight from './flight'

class TripList extends Component {
  state = {
    sortBy: 'fare'
  }

  render() {
    const { selectFlight, selectedJourney } = this.props
    const sortByOption = (option) => {
      let flights = this.props.flights.sort((a, b) => {
        return a[option] - b[option]
      })
      this.setState({sortBy: option})
    }

    return (
      <div className="trips">
        <h4 className="rP">{this.props.routeName}</h4>
        <SortBy
          sortOptions={this.props.options}
          setSortOption={sortByOption}
          sortBy={this.state.sortBy}
        />
        <ul className="flights" id="trip1-list">
          {
            this.props.flights.map(
              (flight) => (
                <Flight
                  key={flight.name}
                  flight={flight}
                  selected={flight.name === selectedJourney}
                  selectFlight={selectFlight}
                />
              )
            )
          }
        </ul>
      </div>
    );
  }
}

export default TripList;