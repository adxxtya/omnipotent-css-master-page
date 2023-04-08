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
      parseFloat(prevPercentage) + (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);

    const track = document.getElementById("image-track");
    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = track.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
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
    <div
      id="image-track"
      onMouseDown={handleOnDown}
      onMouseUp={handleOnUp}
      onMouseMove={handleOnMove}
      data-mouse-down-at={mouseDownAt}
      data-prev-percentage={prevPercentage}
        style={{
        display: "flex",
        gap: "4vmin",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(${percentage}%, -50%)`,
        userSelect: "none",
      }}
    >
      <img
        className="image"
        src="https://source.unsplash.com/random/1280x720/?spirituality&1"
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
        src="https://source.unsplash.com/random/1280x720/?art&2"
        draggable="false"
        style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
        }}
      />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?travel&3"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?animals&4"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?night&5"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?city&7"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?street&8"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?nature&9"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?fashion&10"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?car&11"
          draggable="false"
          style={{
          width: "36vmin",
          height: "42vmin",
          objectFit: "cover",
          objectPosition: "100% center",
          }}
        />
        <img className="image"
        src="https://source.unsplash.com/random/1280x720/?aesthetic&12"
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