import Image from 'next/image';
import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Link from 'next/link';

const MAX_VISIBILITY = 3;

const Card = ({ title, imageSrc, linkTo }) => {
  const handleCardClick = () => {
    window.open(linkTo, "_blank");
  };

  return (
    <div className='card' onClick={handleCardClick}>
      <h2>{title}</h2>
      <Image src={imageSrc} alt={title} layout='fill' />
    </div>
  );
};

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
      title: 'Gopher Coffee',
      imageSrc: '/assets/eyes/raw/gopher-coffee.png',
      linkTo: '/eyes/eyes5'
    },
                            {
      title: 'Gopher Scientist',
      imageSrc: '/assets/eyes/raw/gopher-scientist.png',
      linkTo: '/eyes/eyes9'
    },
                    {
      title: 'Gopher Pirate',
      imageSrc: '/assets/eyes/raw/gopher-pirate.png',
      linkTo: '/eyes/eyes8'
    },
    {
      title: 'Gopher Wand',
      imageSrc: '/assets/eyes/raw/gopher-wand.png',
      linkTo: '/eyes/eyes4'
    },
            {
      title: 'Gopher Gamer',
      imageSrc: '/assets/eyes/raw/gopher-gamer.png',
      linkTo: '/eyes/eyes6'
    },
                {
      title: 'Gopher Drink',
      imageSrc: '/assets/eyes/raw/gopher-drink.png',
      linkTo: '/eyes/eyes7'
    },

        {
      title: 'Gopher Waiter',
      imageSrc: '/assets/eyes/raw/gopher-waiter.png',
      linkTo: '/eyes/eyes2'
    },
        {
      title: 'Gopher Skull',
      imageSrc: '/assets/eyes/raw/gopher-skull.png',
      linkTo: '/eyes/eyes3'
    },
    {
      title: '',
      imageSrc: '/assets/eyes/raw/gopher-mohawk.png',
      linkTo: '/eyes/eyes1'
    },
  ];

  return (
    <div className='app'>
      <Carousel>
        {cards.map((card, i) => (
          <Card key={i} title={card.title} imageSrc={card.imageSrc} linkTo={card.linkTo} />
        ))}
      </Carousel>
    </div>
  );
};


export default App;