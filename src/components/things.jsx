import React from "react";
import { Rnd } from "react-rnd";

export default function DraggableLanding() {
  return (
    <Rnd
      default={{
        x: 400,
        y: 800,
        width: "auto",
        height: "auto",
      }}
      bounds="window"
      style={{
        zIndex: 100,
      }}
    >
      <div className="bg-[#61B8FF] rounded-sm p-8 w-lg border-3 border-[#61B8FF] hover:border-[#0C8CE9]">

        <p>so... how'd i get here?</p>

      </div>
    </Rnd>
  );
}