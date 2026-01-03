import React from "react";

const Arena = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center bg-slate-50"
      style={{
        backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      {children}
    </div>
  );
};

export default Arena;
