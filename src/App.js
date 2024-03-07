import React from "react";
import ResizableItem from "./components/ResizableItem";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <div style={{ display: "flex" }}>
        {/* First resizable component */}
        <ResizableItem defaultWidth={300} defaultHeight={300} />
        {/* Second resizable component */}
        <ResizableItem defaultWidth={300} defaultHeight={300} />
      </div>
      {/* Third resizable component */}
      <ResizableItem defaultWidth={600} defaultHeight={500} />
    </div>
  );
};

export default App;
