import React from "react";
import { Rnd } from "react-rnd";

export default function DraggableLanding() {
  return (
    <Rnd
      default={{
        x: 300,
        y: 360,
        width: "auto",
        height: "auto",
      }}
      bounds="window"
      style={{
        zIndex: 100,
      }}
    >
      <div className="bg-[#61B8FF] rounded-sm p-8 w-lg border-3 border-[#61B8FF] hover:border-[#0C8CE9]">
        <p className="mb-4">hi! i'm acon, a 19-year-old from waterloo, canada :3</p>
        <p className="mb-4">
          i'm currently running programs @
          <a href="https://hackclub.com/" className="text-[#E0FF71]" target="_blank" rel="noopener noreferrer"> hack club</a>!
          i'm also a first year student @ university of waterloo.
        </p>
        <p className="mb-4">i graduated high school june 2024 and took a gap year to spend a year in the states making things for hack club. </p>
        <p className="mb-2">some things i do:</p>
        <ul className="list-disc pl-6">
          <li>code! i built this site with astro + tailwind. check out my <a>github</a>!</li>
          <li>hardware projects! i like making pcb's and 3d models. (kicad + fusion,,,)</li>
          <li>design + art stuff! i love using figma and procreate.</li>
        </ul>
      </div>
    </Rnd>
  );
}