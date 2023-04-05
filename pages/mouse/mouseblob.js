import { useRef, useEffect } from 'react';

export default function Home() {
  const blobRef = useRef();

  useEffect(() => {
    const blob = blobRef.current;
    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };
  }, []);

  return (
    <>
      <div
        id="blob"
        ref={blobRef}
        style={{
          backgroundColor: 'white',
          height: '34vmax',
          aspectRatio: '1',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'linear-gradient(to right, aquamarine, mediumpurple)',
          animation: 'rotate 20s infinite',
          opacity: '0.8',
        }}
      ></div>
      <div
        id="blur"
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: '2',
          backdropFilter: 'blur(12vmax)',
        }}
      ></div>
    </>
  );
}
