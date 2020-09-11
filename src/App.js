import React from "react";
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

function App() {
  return (
    <div>
      <MyColorPicker colors={colors} />
    </div>
  );
}

export default App;
