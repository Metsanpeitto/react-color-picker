import React, { Component, PureComponent } from "react";
import reactCSS from "reactcss";
import throttle from "lodash/throttle";
import * as saturation from "../helpers/saturation";

export class Saturation extends (PureComponent || Component) {
  constructor(props) {
    super(props);

    this.throttle = throttle((fn, data, e) => {
      fn(data, e);
    }, 50);
  }

  componentWillUnmount() {
    this.throttle.cancel();
    this.unbindEventListeners();
  }

  handleChange = (e) => {
    typeof this.props.onChange === "function" &&
      this.throttle(
        this.props.onChange,
        saturation.calculateChange(e, this.props.hsl, this.container),
        e
      );
  };

  handleMouseDown = (e) => {
    this.handleChange(e);
    window.addEventListener("mousemove", this.handleChange);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  handleMouseUp = () => {
    this.unbindEventListeners();
  };

  unbindEventListeners() {
    window.removeEventListener("mousemove", this.handleChange);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  render() {
    const { color, white, black, pointer, circle } = this.props.style || {};
    const styles = reactCSS(
      {
        default: {
          color: {
            background: `hsl(${this.props.hsl.h},100%, 50%)`,
          },
          white: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius,
          },
          black: {
            absolute: "0px 0px 0px 0px",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius,
          },
          pointer: {
            position: "absolute",
            top: `${-(this.props.hsv.v * 100) + 100}%`,
            left: `${this.props.hsv.s * 100 + 2.3}%`,
          },
        },
        custom: {
          color,
          white,
          black,
          pointer,
          circle,
        },
      },
      { custom: !!this.props.style }
    );

    return (
      <div
        style={styles.color}
        ref={(container) => (this.container = container)}
        className="saturation"
        onMouseDown={this.handleMouseDown}
        onTouchMove={this.handleChange}
        onTouchStart={this.handleChange}
      >
        <div className="saturation-white">
          <div className="saturation-black" />
          <div style={styles.pointer} className="pointer">
            {this.props.pointer ? (
              <this.props.pointer {...this.props} />
            ) : (
              <div style={styles.circle} className="circle" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Saturation;
