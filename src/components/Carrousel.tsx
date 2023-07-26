import { useState } from 'react';

const Carrousel: React.FC = (props) => {
  const items = [
    {
      imgSrc: '',
      title: '1',
      text: 'asdfasfd',
    },
    {
      imgSrc: '',
      title: '2',
      text: 'asdfasfd',
    },
  ];
  const [currentItem, setCurrentItem] = useState(0);

  function handleNextImage(): void {}

  return (
    // TODO mostrar una sola imagen por vez 
    <section className="overflow-hidden bg-slate-50/50">
      <div className="flex">
        {items.map((e, index) => {
          return (
            <div key={index} className='basis-full flex-shrink-0 text-center'>
              <h1>asdfs</h1>
              <h1>asdf</h1>
              <h1>asdf</h1>
              <h1>{e.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="absolute">
        <button className="">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </section>
  );
};

export default Carrousel;
