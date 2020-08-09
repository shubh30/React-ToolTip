import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      direction,
      getCurrentDirections,
      setMouseEnter,
      setMouseLeave,
      content,
      tooltipRef,
    } = this.props;
    let directions = getCurrentDirections(direction);
    return (
      <div className="tooltip-container">
        <button
          className="button"
          onMouseLeave={() => setMouseLeave()}
          onMouseEnter={() => setMouseEnter()}
        >
          {content}
        </button>
        <div ref={tooltipRef} className={directions.tooltipDir}>
          <div className="tooltip-text">Tooltip!</div>
          <div className={directions.arrowDir}></div>
        </div>
      </div>
    );
  }
}

export default Button;
