import { useState } from 'react';
import Link from 'next/link';
import Slider from '../views/slider';
import CarouselCards from '../views/cards/carousel-cards';
import ThreeDHoverCards from '../views/cards/3d-card-hover';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Home() {

  const [text, setText] = useState("SLIDER");

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

  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const href = `/eyes/eyes${randomNumber}`;

  return (
    <div style={{ height: "auto" ,paddingTop: "12px" }}>
      <div style={{ height: "26vh" }}>
        <Link href='/slider'>  <h1 data-value="SLIDER" onMouseOver={handleMouseOver} style={{ fontFamily: "'Space Mono', monospace", fontSize: "80px", color: "white",  marginTop: 0, borderRadius: "clamp(0.4rem, 0.75vw, 1rem)", transition: "background-color 400ms, color 400ms", }} >
          {text}
        </h1>
        </Link>
        <Slider />
      </div>
      <div style={{ marginTop: "240px" }}>
        <Link href={href}> <text style={{ paddingLeft: "16px", fontSize: "54px", fontFamily: "Nunito", padding: "8px" }} >
          Gophers</text></Link>
        <CarouselCards />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link href='/cards/3d-card-hover'><text style={{ paddingLeft: "16px", fontSize: "54px", fontFamily: "Nunito", padding: "8px" }}>Cards</text></Link>
        <ThreeDHoverCards />
      </div>
        <hackEffect />

    </div>
  );
}
  
