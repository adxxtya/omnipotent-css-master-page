import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

function Eyes() {
  const eyesRef = useRef([]);
  const anchorRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rekt = anchorRef.current.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      setMousePosition({ x: mouseX, y: mouseY });
      rotateEyes(angleDeg);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const angle = (x1, y1, x2, y2) => {
    const radians = Math.atan2(y1 - y2, x1 - x2);
    const angleDeg = (radians * 180) / Math.PI;
    return angleDeg;
  };

  const rotateEyes = (angleDeg) => {
    eyesRef.current.forEach((eye) => {
      eye.style.transform = `rotate(${0 + angleDeg}deg)`;
    });
  };

  return (
    <div>
      <div
              style={{ position: 'relative' }}
      >
        <Image style={{ position: 'absolute', top: '-10px', left: '-8px' }} src="/assets/eyes/eyeless/gopher-skull-eyeless.png" width={90} height={90} ref={anchorRef} />
        <div style={{ position: 'absolute', top: '23px', left: '10px' }}>
          <Image src="/assets/eyes/eyes-rectangular-png.png" width={16} height={10} ref={(el) => (eyesRef.current[0] = el)} />
        </div>
        <div style={{ position: 'absolute', top: '23px', left: '50px' }}>
          <Image src="/assets/eyes/eyes-rectangular-png.png" width={16} height={10} ref={(el) => (eyesRef.current[1] = el)} />
        </div>
      </div>
    </div>
  );
}

export default Eyes;