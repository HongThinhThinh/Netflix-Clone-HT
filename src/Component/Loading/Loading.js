import React from "react";
import AtomicSpinner from "atomic-spinner";
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AtomicSpinner atomSize="485" />
    </div>
  );
}

export default Loading;
