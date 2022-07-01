import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web and Mobile Developer",
          "Top rated Svelte.js, React.js Developer",
          "Javascript Frontend Frameworks Developer",
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
