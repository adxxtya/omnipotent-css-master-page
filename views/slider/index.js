import { useState, useEffect } from "react";

function ImageSlider(props) {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const nextPercentageUnconstrained =
      parseFloat(prevPercentage) + (mouseDelta / maxDelta) * -35;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);

    const track = document.getElementById("image-track");
    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1500, fill: "forwards" }
    );

    const images = track.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1500, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setMouseDownAt(0);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
    <text style={{ fontSize: "54px", fontFamily: "Nunito", padding: "8px" }}>{ props.title }</text>
    <div
      id="image-track"
      onMouseDown={handleOnDown}
      onMouseUp={handleOnUp}
      onMouseMove={handleOnMove}
      data-mouse-down-at={mouseDownAt}
      data-prev-percentage={prevPercentage}
      style={{
        display: "flex",
        gap: "3vmin",
        position: "absolute",
        left: "40%",
        top: "35%",
        transform: `translate(${percentage}%, -50%)`,
        userSelect: "none",
      }}
    >
      <img
        className="image"
        src="https://source.unsplash.com/random/2000x720/?spirituality&1"
        draggable="false"
        style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
        }}
      />
      <img
        className="image"
        src="https://source.unsplash.com/random/2000x720/?art&2"
        draggable="false"
        style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
        }}
      />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?travel&3"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?animals&4"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?night&5"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?city&7"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?street&8"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?nature&9"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?fashion&10"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?car&11"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/2000x720/?aesthetic&12"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        
</div>
</>
);
}

export default ImageSlider;


//   return (
//       <body className={styles.myBody}>
//                 <div id={styles.imageTrack} data-mouse-down-at="0" data-prev-percentage="0" className={styles.imageTrack}>
//    <img class={styles.image} src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
//    <img class={styles.image} src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//       </div>
//     </body>
//   );
// }






//   <img class={styles.image} src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
//   <img class={styles.image} src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />