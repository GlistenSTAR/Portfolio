import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web and Mobile, Blockchain Developer",
          "Senior Full-stack Developer",
          "Developer who has 9 years experience",
          "Top rated Svelte.js, React.js expert as Frontend Developer",
          "Node.js, Python Backend Developer",
          "PHP and Laravel Developer",
          "etc, I am interested in Go, Rust",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
