export const inlineStyles = {
  container: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    display: "flex",
    flexDirection: "column",
    height: 282,
    width: 200,
  },
  pointer: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    transform: "translate(-9px, -1px)",
    backgroundColor: "rgb(248, 248, 248)",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
  },
  slider: {
    marginTop: "1px",
    width: "4px",
    borderRadius: "1px",
    height: "8px",
    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
    background: "#fff",
    transform: "translateX(-2px)",
  },
  saturation: {
    width: "100%",
    paddingBottom: "75%",
    position: "relative",
    overflow: "hidden",
  },
  swatchSquare: {
    minWidth: 20,
    minHeight: 20,
    margin: "1px 2px",
    cursor: "pointer",
    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
  },
  editableInputStyle: {
    input: {
      border: "none",
    },
    label: {
      fontSize: "12px",
      color: "#999",
    },
  },
};
