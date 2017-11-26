import * as types from './actionTypes';
const results = require('../results.json').searchResults

export const getSearchResults = () => {
  return {
    type: types.SEARCH_RESULTS,
    results
  }
}

export const setFilters = (filters) => {
  console.log("setFilters fired indeed")
  return {
    type: types.FILTER_RESULTS,
    filters
  };
}

export const setSearchProps = (props) => {
  return {
    type: types.SEARCH_PROPS,
    props
  };
}

export const setSortBy = (sortBy) => {
  console.warn(sortBy)
  return {
    type: types.SEARCH_PROPS,
    payload: {sortBy: sortBy}
  };
}
