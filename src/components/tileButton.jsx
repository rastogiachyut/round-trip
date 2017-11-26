import React from 'react';

const TileButtons = (props) => {
  return (<button value={props.name} className={ props.selected ? "sort-trip2 selected" : "sort-trip2" } onClick={props.onClick}>{props.name}</button>)
}

export default TileButtons;