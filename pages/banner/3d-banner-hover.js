import React, { useEffect } from "react";

function Banner() {
useEffect(() => {
  const card = document.querySelector(".card");

  const handleMouseMove = (e) => {
    const ax = -((window.innerWidth / 2) - e.pageX) / 120;
    const ay = ((window.innerHeight / 2) - e.pageY) / 80;
    card.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`;
    card.style.webkitTransform = `rotateY(${ax}deg) rotateX(${ay}deg)`;
    card.style.mozTransform = `rotateY(${ax}deg) rotateX(${ay}deg)`;
  };

  document.addEventListener("mousemove", handleMouseMove);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, []);


  return (
    <div
      style={{
        background: "#0A0B0E",
        perspective: "1200px",
        transformStyle: "preserve-3d",
        display: "flex",
        height: "100vh",
        color: "#fff",
        fontFamily: "'Open Sans',georgia,serif",
      }}
    >
      <div
        className="card"
        style={{
          transform: "translateZ(0)",
          background: "#5E43FF",
          borderRadius: "20px",
          width: "1100px",
          height: "215px",
          margin: "auto",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          transition: "box-shadow .3s",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            flex: "375px 0 0",
            height: "215px",
            borderRadius: "20px",
            transform: "translateZ(40px)",
          }}
        >
          <img
            src="https://cdn.sanity.io/images/434cfk44/production/afdb0d0753c0481c7a68f298c27da002a52d9e5b-760x430.jpg?w=1000&h=1000&fit=max"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              WebkitObjectFit: "cover",
              transition: "transform .3s",
            }}
          />
        </div>
        <div
          style={{
            padding: "40px 60px",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <p
            style={{
              transform: "translateZ(40px)",
              display: "block",
              textAlign: "left",
              fontSize: "20px",
            }}
          >
            Autodesk University: Leveraging Motivating Design Techniques To Drive
            Business Value.
          </p>
        </div>
        <div
          style={{
            flex: "auto",
            display: "flex",
            padding: "0 60px 0 0",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "rgba(0,0,0,.5)",
              borderRadius: "100%",
              transition: "transform .3s",
              alignSelf: "center",
              display: "flex",
            }}
          >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w_c0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{margin: "0 auto", alignSelf: "center", fontSize: "24px"}}>
          <path d="M42"></path>
        </svg>
      </div>
    </div>
    <div style={{content: "", borderRadius: "20px", position: "absolute", top: "0", left: "0", width: "100%", height: "100%", boxShadow: "0 0px 80px rgba(94,67,255,.8)", opacity: "0", transition: "opacity 0.3s ease-in-out"}}>
    </div>
  </div>
</div>
  );
};

export default Banner;
