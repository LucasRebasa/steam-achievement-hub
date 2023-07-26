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

  function handleNextImage(): void {
    setCurrentItem((current) =>
      current === items.length - 1 ? 0 : current + 1
    );
  }

  function handlePrevImage(): void {
    setCurrentItem((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  }

  return (
    // TODO mostrar una sola imagen por vez
    <section className="overflow-hidden relative bg-slate-50/50">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentItem * 100}%)` }}
      >
        {items.map((e, index) => {
          return (
            <div key={index} className="basis-full flex-shrink-0 text-center">
              <h1>asdfs</h1>
              <h1>asdf</h1>
              <h1>asdf</h1>
              <h1>{e.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between absolute inset-0 m-4">
        <button onClick={handlePrevImage}>
          <i className="fa-solid fa-arrow-left text-2xl"></i>
        </button>
        <button onClick={handleNextImage}>
          <i className="fa-solid fa-arrow-right text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Carrousel;
