import React, { Component } from 'react';
import TileButtons from './tileButton'

class SortBy extends Component {
  render() {
    return (
      <div className="sorts">
        {
          this.props.sortOptions.map(
            (option)=>(
              <TileButtons
                key={option}
                name={option}
                onClick={() => this.props.setSortOption(option)}
                selected={this.props.sortBy === option}
              />
            )
          )
        }
      </div>
    )
  }
}

export default SortBy;