import * as types from '../actions/actionTypes';
import { filterAirlines, filterTime } from '../lib/filters'

export default (state = {}, action) => {

  switch (action.type) {
    case types.FILTER_RESULTS:
      console.warn("state",state)
      console.warn("action.filters",action.filters)
      // let primaryJourney = []
      // let returnJourney = []
      const filters = action.filters
      let ansPri = Object.assign([], state.results.primaryJourney)
      let ansRet = Object.assign([], state.results.returnJourney)
      // console.warn("filters", filters)
      if (filters) {
        const { airline_codes, departureTime, returnTime } = filters
        if (airline_codes) {
          ansPri = filterAirlines(ansPri, airline_codes)
          ansRet = filterAirlines(ansRet, airline_codes)
        }
        if (departureTime) {
          ansPri = filterTime(ansPri, departureTime, "departs")
          ansRet = filterTime(ansRet, departureTime, "departs")
        }
        if (returnTime) {
          ansPri = filterTime(ansPri, returnTime, "arrives")
          ansRet = filterTime(ansRet, returnTime, "arrives")
        }
      }
      const filteredSearchResults = {
        primaryJourney: ansPri,
        returnJourney: ansRet 
      }
      return {
        ...state,
        filters: action.filters,
        results: filteredSearchResults
      };
    case types.SEARCH_RESULTS:
      return {
        ...state,
        results: action.results
      };
    case types.SEARCH_PROPS:
      return {...state, ...action.props};
    case types.SORT_BY:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
