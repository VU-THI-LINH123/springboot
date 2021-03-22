import React from "react";

const ScrumBoardLabelBar = ({ color = "primary" }) => {
  return (
    <div
      className={`bg-${color}`}
      style={{
        width: "32px",
        height: "6px",
        borderRadius: "6px",
        overflow: "hidden",
        marginRight: "8px"
      }}
    ></div>
  );
};

export default ScrumBoardLabelBar;
