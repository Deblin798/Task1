import React from "react";
import { Resizable } from "re-resizable";

const ResizableItem = ({ defaultWidth, defaultHeight }) => {
  return (
    <div style={{ marginRight: "10px", marginBottom: "10px" }}>
      <Resizable
        className="component"
        defaultSize={{ width: defaultWidth, height: defaultHeight }}
        enable={{
          top: true,
          right: true,
          bottom: true,
          left: true
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            background: "#d3d3d3",
            width: "100%",
            height: "100%"
          }}
        >
          Resizable Content
        </div>
      </Resizable>
    </div>
  );
};

export default ResizableItem;
