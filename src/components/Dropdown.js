import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    const { handleSelectChange, selectRef } = this.props;
    return (
      <div>
        <select className="menu" ref={selectRef} onChange={handleSelectChange}>
          <option value="top">Top</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
