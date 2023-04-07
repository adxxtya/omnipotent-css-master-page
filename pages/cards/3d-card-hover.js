import React, { useRef } from 'react';

function App() {
  const cardRef = useRef(null);
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    cardRef.current.querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }

  function handleMouseEnter() {
    bounds = cardRef.current.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  }

  function handleMouseLeave() {
    document.removeEventListener('mousemove', rotateToMouse);
    cardRef.current.style.transform = '';
    cardRef.current.querySelector('.glow').style.backgroundImage = '';
  }

  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        perspective: '1500px',
        background: 'linear-gradient(white, #efefef)'
      }}
    >
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          fontWeight: 'bold',
          padding: '1em',
          textAlign: 'right',
          color: '#181a1a',
          width: '300px',
          height: '400px',
          boxShadow: '0 1px 5px #00000099',
          borderRadius: '10px',
          backgroundImage:
            'url(https://source.unsplash.com/random/)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          position: 'relative',
          transitionDuration: '300ms',
          transitionProperty: 'transform, box-shadow',
          transitionTimingFunction: 'ease-out',
          transform: 'rotate3d(0)'
        }}
      >
       <text style={{   filter: 'invert(100%)' }}> 3D Card </text>
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
    </div>
  );
}

export default App;
