import { useState } from 'react';
import Slider from '../views/slider';

export default function Home() {
  return (
    <div style={{ height: "auto" ,paddingTop: "12px" }}>
      <div style={{ height: "25vh" ,paddingTop: "12px" }}>
        <Slider title="Slider" />
      </div>
      <div style={{ marginTop: "240px" }}>
        <text style={{ fontSize: "54px", fontFamily: "Nunito", padding: "8px" }}>Gopher</text>
        Gopher Carouse;
      </div>
    </div>
  );
}
