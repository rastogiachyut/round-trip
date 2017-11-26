const timeRangeMap = {
  "0": [0, 23],
  "1": [0, 8],
  "2": [9, 12],
  "3": [13, 16],
  "4": [17, 20],
  "5": [21, 23]
}

export const filterAirlines = (flights, airline_codes) => {
  let ans = []
  Object.keys(airline_codes).forEach((key) => {
    if (airline_codes[key]) {
      console.log("ans", ans)
      let res = flights.filter(flight => flight.name.includes(key))
      ans = ans.concat(res)
    }
  })
  return ans
}

export const filterTime = (flights, timeCode, timeType) => {
  if (timeCode === '' || timeCode === '0') {
    return flights
  }
  let ans
  ans = flights.filter(flight => {
    const hour = (new Date(flight[timeType])).getHours()
    return ((timeRangeMap[timeCode][0] <= hour) && (hour <= timeRangeMap[timeCode][1]))
  })
  return ans
}