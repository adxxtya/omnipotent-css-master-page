import Image from 'next/image';
import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className='body'>
    <div className='carousel'>
      {active > 0 && (
        <button
          className='nav left'
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            opacity:
              Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display:
              Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className='nav right'
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
      </div>
      </div>
  );
};

const App = () => {
  const cards = [
    {
      title: 'Card 1',
      content: '/assets/eyes/eyeless/gopher-coffee-eyeless.png'
    },
    {
      title: 'Card 2',
      content:
        'Ut enim ad minim veniam, ',
    },
    {
      title: 'Card 3',
      content:
        'Duis aute irure dolor in ',
    },
    {
      title: 'Card 4',
      content:
        'Excepteur sint occaecat '
    },
  ];

  return (
    <div className='app'>
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
        <Card
          title={'Card ' + (i + 1)}
          content={'Excepteur sint occaecat'}
        />
      ))}
      </Carousel>
    </div>
  );
};

export default App;