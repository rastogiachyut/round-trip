import React, { Component } from 'react';
import TripList from './tripList'
import Cart from './cart'

class Trip extends Component {
  render() {
    const {
      query,
      searchResults,
      sortOptions,
      showFilter,
      selectPrimaryFlight,
      selectReturnFlight,
      selectedPrimaryJourney,
      selectedReturnJourney,
      primaryPrice,
      prevPrimaryPrice,
      returnPrice,
      prevReturnPrice
    } = this.props
    const { to, from } = query
    const { primaryJourney, returnJourney } = searchResults

    return (
      <div id="display">
      <Cart
        primaryPrice={primaryPrice}
        prevPrimaryPrice={prevPrimaryPrice}
        returnPrice={returnPrice}
        prevReturnPrice={prevReturnPrice}
      />
      {showFilter ? null : (<div className="trip">
        <TripList
          routeName={from + ' - ' + to}
          flights={primaryJourney}
          options={sortOptions}
          selectFlight={selectPrimaryFlight}
          selectedJourney={selectedPrimaryJourney}
          />
        <TripList
          routeName={to + ' - ' + from}
          flights={returnJourney}
          options={sortOptions}
          selectFlight={selectReturnFlight}
          selectedJourney={selectedReturnJourney}
        />
      </div>)}
    </div>
    );
  }
}

export default Trip;