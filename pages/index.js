import { useState } from 'react';
import Link from 'next/link';
import Slider from '../views/slider';
import CarouselCards from '../views/cards/carousel-cards';

export default function Home() {

  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const href = `/eyes/eyes${randomNumber}`;

  return (
    <div style={{ height: "auto" ,paddingTop: "12px" }}>
      <div style={{ height: "25vh" }}>
        <Link href='/slider'><text style={{ paddingLeft: "16px",fontSize: "54px", fontFamily: "Nunito" }}>Slider</text></Link>
        <Slider />
      </div>
      <div style={{ marginTop: "240px" }}>
        <Link href={href}><text style={{ paddingLeft: "16px", fontSize: "54px", fontFamily: "Nunito", padding: "8px" }}>Gophers</text></Link>
        <CarouselCards />
      </div>
    </div>
  );
}
  
