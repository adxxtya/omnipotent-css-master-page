import React, { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function HackEffect() {
  const [text, setText] = useState("HYPERPLEXED");

  const handleMouseOver = (event) => {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      setText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

  let interval = null;

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "black",
        margin: "0rem",
        overflow: "hidden",
      }}
      className="App"
    >
      <h1
        data-value="HYPERPLEXED"
        onMouseOver={handleMouseOver}
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(3rem, 10vw, 10rem)",
          color: "white",
          padding: "0rem clamp(1rem, 2vw, 3rem)",
          borderRadius: "clamp(0.4rem, 0.75vw, 1rem)",
          transition: "background-color 400ms, color 400ms",
        }}
      >
        {text}
      </h1>
    </div>
  );
}
