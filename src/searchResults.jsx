import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as searchActions from './actions/searchActions';
import Filter from './components/filter'
import Trip from './components/trip'

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      primaryPrice: 0,
      prevPrimaryPrice: 0,
      returnPrice: 0,
      prevReturnPrice: 0,
      query: {
        to: 'Mumbai',
        from: 'New Delhi',
        journeyDate: "Mon, 02 Aug",
        returnDate: "Sun, 08 Aug",
        passengers: "2 adults, 2 children"
      },
      sortOptions: ['departs', 'arrives', 'fare'],
      sortBy: 'fare',
      allArilines: [
        "Air India",
        "Air India IC",
        "GoAir",
        "IndiGo",
        "Jet Airways",
        "Jet Airways Konnect",
        "JetLite",
        "Kingfisher",
        "Kingfisher Red",
        "SpiceJet"
      ]
    }
  }

  componentWillMount = () => {
    // Assuming flight names are unique
    const searchResults = this.props.getSearchResults().results;
    this.selectPrimaryFlight(searchResults.primaryJourney[0])
    this.selectReturnFlight(searchResults.returnJourney[0])
  }

  toggleFilter = () => {
    console.log("In toggleFilter")
    this.setState({
      showFilter: !this.state.showFilter
    });
  }

  selectPrimaryFlight = (flight) => {
    const prevPrice = this.state.primaryPrice
    this.setState({
      selectedPrimaryJourney: flight.name,
      primaryPrice: flight.fare,
      prevPrimaryPrice: prevPrice
    })
  }

  selectReturnFlight = (flight) => {
    const prevPrice = this.state.returnPrice
    this.setState({
      selectedReturnJourney: flight.name,
      returnPrice: flight.fare,
      prevReturnPrice: prevPrice
    })
  }

  render() {
    const {
      query,
      primaryPrice,
      prevPrimaryPrice,
      returnPrice,
      showFilter,
      prevReturnPrice,
      sortOptions,
      selectedPrimaryJourney,
      selectedReturnJourney
    } = this.state
    const { searchResults } = this.props;
    const { journeyDate, returnDate, to, from, passengers } = query
    // const { filters } = this.props
    
    return (
      <div className="content">
        <h1>
          <strong className="stop">{from + ' - ' + to}</strong>
          <span>{journeyDate + " - " + returnDate}</span>
          <span className="thin">{" | " + passengers}</span>
          <a
            className="pillButton fRight"
            onClick={this.toggleFilter}
          >
            Filter
          </a>
        </h1>
        <Trip
          searchResults={searchResults}
          query={query}
          sortOptions={sortOptions}
          showFilter={showFilter}
          primaryPrice={primaryPrice}
          prevPrimaryPrice={prevPrimaryPrice}
          returnPrice={returnPrice}
          prevReturnPrice={prevReturnPrice}
          selectPrimaryFlight={this.selectPrimaryFlight.bind(this)}
          selectedPrimaryJourney={selectedPrimaryJourney}
          selectReturnFlight={this.selectReturnFlight.bind(this)}
          selectedReturnJourney={selectedReturnJourney}
        />
        {showFilter ? <Filter toggleFilter={this.toggleFilter} /> : null}
      </div>
    );
  };
}

const mapStateToProps = ( { searchReducer }, props) => {
  // console.log("here  here", searchReducer)
  return {
    filters: searchReducer.filters,
    searchResults: searchReducer.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResults: () => {
      return dispatch(searchActions.getSearchResults());
    }
  };
}

SearchResults.defaultProps = {
  showFilter: false
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);