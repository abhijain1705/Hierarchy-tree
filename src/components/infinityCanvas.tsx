import React from "react";

const InfinityCanvas = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen w-screen overflow-hidden relative">{children}</div>;
};

export default InfinityCanvas;
