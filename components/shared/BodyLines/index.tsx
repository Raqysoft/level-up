import React from "react";

function BodyLines({ cols }: { cols: number }) {
  return (
    <div
      className="absolute size-full inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {[...Array(cols)].map((_, i) => (
        <div key={i} className="border-r border-white/10 last:border-0" />
      ))}
    </div>
  );
}

export default BodyLines;
