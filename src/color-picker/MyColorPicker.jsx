import React from "react";
import { CustomPicker } from "react-color";
import { inlineStyles } from "./inline-styles/inlineStyles";
import Hue from "./common/Hue";
const tinycolor = require("tinycolor2");

const {
  Saturation,
  EditableInput,
} = require("react-color/lib/components/common");

const CustomSlider = () => {
  return <div style={inlineStyles.slider} />;
};

const CustomPointer = () => {
  return <div style={inlineStyles.pointer} />;
};

class MyColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hsl: {
        h: 0,
        s: 0,
        l: 0,
      },
      hsv: {
        h: 0,
        s: 0,
        v: 0,
      },
      hex: "aaaaaa",
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const color = tinycolor(this.props.hexCode);
    this.onChange(color);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hexCode !== this.state.hex) {
      const color = tinycolor(nextProps.hexCode);
      this.onChange(color);
    }
  }

  onChange(e) {
    const color = tinycolor(e);
    this.setState(() => {
      return {
        hsv: color.toHsv(),
        hsl: color.toHsl(),
        hex: color.toHex(),
      };
    });
  }

  displayColorSwatches = (colors) => {
    return colors.map((color) => {
      return (
        <div
          onClick={() => this.onChange(color)}
          key={color}
          style={{ ...inlineStyles.swatchSquare, backgroundColor: color }}
        />
      );
    });
  };

  render() {
    return (
      <div className="color-picker">
        <div className="saturation">
          <Saturation
            className="saturation-box"
            hsl={this.state.hsl}
            hsv={this.state.hsv}
            pointer={CustomPointer}
            onChange={this.onChange}
          />
        </div>
        <div style={{ minHeight: 10, position: "relative", margin: 2 }}>
          <Hue
            hsl={this.state.hsl}
            pointer={CustomSlider}
            onChange={this.onChange}
            direction={"horizontal"}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", margin: "2px 0" }}>
          <span
            style={{
              color: "gray",
              fontSize: 13,
              marginRight: 3,
              marginTop: 2,
              marginLeft: 3,
            }}
          >
            Hex
          </span>
          <EditableInput
            className="editableInput"
            style={inlineStyles.editableInputStyle}
            value={this.state.hex}
            onChange={this.onChange}
          />
        </div>

        {this.props.colors.length && (
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              padding: 3,
            }}
          >
            {this.displayColorSwatches(this.props.colors)}
          </div>
        )}

        <div
          style={{
            height: "300px",
            width: "300px",
            position: "relative",
            float: "left",
          }}
        ></div>
      </div>
    );
  }
}

export default CustomPicker(MyColorPicker);
