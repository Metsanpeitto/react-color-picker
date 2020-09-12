import React, { Component } from "react";
import MyColorPicker from "./color-picker/MyColorPicker";

const colors = [
  "#D9E3F0",
  "#F47373",
  "#697689",
  "#37D67A",
  "#2CCCE4",
  "#555555",
  "#dce775",
  "#ff8a65",
  "#ba68c8",
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerOpen: null,
      color: "#D9E3F0",
    };
  }

  getColor = (color) => {
    if (`#${color}` !== this.state.color) {
      console.log(color);

      this.setState(() => {
        return {
          color: `#${color}`,
        };
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="text-button">
          <h1>Press the button to display the color picker </h1>{" "}
          <button
            className="sample"
            onClick={() =>
              this.setState(() => {
                return { pickerOpen: !this.state.pickerOpen };
              })
            }
          >
            <div
              className="color"
              style={
                !this.state.pickerOpen
                  ? { background: this.state.color }
                  : { background: "#D9E3F0" }
              }
            ></div>
          </button>
        </div>
        {this.state.pickerOpen ? (
          <MyColorPicker colors={colors} getColor={this.getColor} />
        ) : null}
      </div>
    );
  }
}

export default App;
