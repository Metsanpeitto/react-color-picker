/**     This component is based on the library react-color. (https://github.com/casesandberg/react-color)
 *
 *      That library provides all the elements and features needed to build highly customized color pickups, anyway,
 *    at the time of integrating the elements from the original dependency, the way of styling get constrained to only
 *    inline-styling.
 *
 *      To allow more customization, I imported the folders required and refactored them to accept class styling in the most
 *    easy way to mantain, using scss and creating independent files for each element.
 *
 *      Each one of the elements required to build this final component is stored along these folders:
 *       .src/color-picker/common *
 *       .src/color-picker/helpers
 *
 *      Deeper modifications are possible editing those files.
 *
 *      In case of need to add more features, they can be imported from the react-color repository with the following syntasix:
 *
 *        import { Alpha } from 'react-color/lib/components/common'
 *
 *      You can import  AlphaPicker BlockPicker ChromePicker CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker
 *     PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker
 *
 */

import React from "react";
import { CustomPicker } from "react-color";
import Hue from "./common/Hue";
import Saturation from "./common/Saturation";
import EditableInput from "./common/EditableInput";

const tinycolor = require("tinycolor2");
/** Tinycolor will help to transform the colors in different formats. */

const CustomSlider = () => {
  return <div className="custom_slider" />;
};

const CustomPointer = () => {
  return <div className="custom_pointer" />;
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
    const hexColor = color.toHex();
    if (hexColor !== this.state.hex) {
      //  this.props.getColor(hexColor);
    }
    this.setState(() => {
      return {
        hsv: color.toHsv(),
        hsl: color.toHsl(),
        hex: color.toHex(),
      };
    });
  }

  displayColorSwatches = (colors) => {
    /** This element  shows different color samples. */
    return colors.map((color) => {
      return (
        <div
          onClick={() => this.onChange(color)}
          key={color}
          className="swatches  swatch-square"
          style={{ backgroundColor: color }}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <div className="color-picker">
          <div className="saturation-canvas">
            <Saturation
              /** This element shows a gradient sample of colors with different level of saturation
               * and a pointer to select colors and propagates it to the other elements.
               */
              hsl={this.state.hsl}
              hsv={this.state.hsv}
              pointer={CustomPointer}
              onChange={this.onChange}
            />
          </div>
          <div className="hue-canvas">
            <Hue
              /** This element shows one slider pointer over a gradient sample of colors, the selected propagates  to the other elements */
              hsl={this.state.hsl}
              pointer={CustomSlider}
              onChange={this.onChange}
              direction={"horizontal"}
            />
          </div>
          <div className="editable-input-canvas">
            {/** This element takes and hexadecimal color as input and propagates it to the other elements */}
            <span>Hex</span>
            <EditableInput value={this.state.hex} onChange={this.onChange} />
          </div>

          {this.props.colors.length && (
            <div className="swatches-canvas">
              {/** This element displays square samples of colors and the selected it's propagated to the other elements */}
              {this.displayColorSwatches(this.props.colors)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CustomPicker(MyColorPicker);
