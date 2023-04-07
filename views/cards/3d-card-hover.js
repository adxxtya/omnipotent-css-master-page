import React, { useRef } from 'react';

const cardsData = [
  { image: 'https://source.unsplash.com/random/400x400?1' },
  { image: 'https://source.unsplash.com/random/400x400?2' },
  { image: 'https://source.unsplash.com/random/400x400?3' },
];

function App() {
  const cardRefs = useRef(Array(cardsData.length).fill(null));
  const boundsList = useRef(Array(cardsData.length).fill(null));

  function rotateToMouse(e, index) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - boundsList.current[index].x;
    const topY = mouseY - boundsList.current[index].y;
    const center = {
      x: leftX - boundsList.current[index].width / 2,
      y: topY - boundsList.current[index].height / 2
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRefs.current[index].style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    cardRefs.current[index].querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + boundsList.current[index].width / 2}px
        ${center.y * 2 + boundsList.current[index].height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }

  function handleMouseEnter(index) {
    boundsList.current[index] = cardRefs.current[index].getBoundingClientRect();
    cardRefs.current[index].addEventListener('mousemove', (e) => rotateToMouse(e, index));
  }

  function handleMouseLeave(index) {
    cardRefs.current[index].removeEventListener('mousemove', (e) => rotateToMouse(e, index));
    cardRefs.current[index].style.transform = '';
    cardRefs.current[index].querySelector('.glow').style.backgroundImage = '';
  }

  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start', // Change this to "flex-start"        alignItems: 'center',
        flexWrap: 'wrap',
        height: '40vh',
        marginLeft: '50px',
        fontFamily: 'system-ui, sans-serif',
        perspective: '1500px',
      }}
    >
      {cardsData.map((card, index) => (
        <div
          ref={(el) => (cardRefs.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={{
            fontWeight: 'bold',
            padding: '1em',
            textAlign: 'right',
            color: '#181a1a',
            width: '240px',
            height: '320px',
            boxShadow: '0 1px 5px #00000099',
              borderRadius: '10px',
            margin: '0 30px 20px 0',
            backgroundImage:
              `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            transitionDuration: '300ms',
            transitionProperty: 'transform, box-shadow',
            transitionTimingFunction: 'ease-out',
            transform: 'rotate3d(0)'
          }}
        >
          <text style={{ filter: 'invert(100%)' }}>{card.title}</text>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: '0',
              top: '0',
              backgroundImage:
                'radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)'
            }}
            className="glow"
          />
        </div>
      ))}
    </div>
  );
}

export default App;
