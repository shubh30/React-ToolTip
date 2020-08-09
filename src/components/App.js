import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: 'top',
      content: "Hover me!",
    };
    this.selectRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  // Direction selected by dropdown
  handleSelectChange = () => {
    this.setState({ direction: this.selectRef.current.value });
  };

  // Apply classes using selected direction 
  getCurrentDirections(key) {
    switch (key) {
      case "top":
        return {
          tooltipDir: "tooltip direction-top",
          arrowDir: "tooltip-arrow tooltip-arrow-bottom",
        };
      case "down":
        return {
          tooltipDir: "tooltip direction-bottom",
          arrowDir: "tooltip-arrow tooltip-arrow-top",
        };
      case "left":
        return {
          tooltipDir: "tooltip direction-left",
          arrowDir: "tooltip-arrow tooltip-arrow-right",
        };
      case "right":
        return {
          tooltipDir: "tooltip direction-right",
          arrowDir: "tooltip-arrow tooltip-arrow-left",
        };
      default:
        return {
          tooltipDir: "tooltip direction-bottom",
          arrowDir: "tooltip-arrow tooltip-arrow-top",
        };
    }
  }

  // on mouse out hide the tooltip
  setMouseLeave = () => {
    this.tooltipRef.current.style.opacity = "0";
  };

  // On mouse enter show the tooltip
  setMouseEnter = () => {
    this.tooltipRef.current.style.opacity = "1";
  };

  // Render the app
  render() {
    return (
      <div className="app-container">
        <h1>Tooltip Design</h1>
        <Dropdown
          selectRef={this.selectRef}
          handleSelectChange={this.handleSelectChange}
        />
        <Button
          tooltipRef={this.tooltipRef}
          direction={this.state.direction}
          setMouseLeave={this.setMouseLeave}
          setMouseEnter={this.setMouseEnter}
          getCurrentDirections={this.getCurrentDirections}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default App;