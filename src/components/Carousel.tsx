import { type ReactNode, useState } from 'react';

interface Props {
  children: ReactNode[]
  className?: string
}

const Carousel: React.FC<Props> = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);

  function handleNextImage(): void {
    setCurrentItem((current) =>
      current === children.length - 1 ? 0 : current + 1
    );
  }

  function handlePrevImage(): void {
    setCurrentItem((current) =>
      current === 0 ? children.length - 1 : current - 1
    );
  }

  return (
    <section className="overflow-hidden relative h-1/2 bg-slate-50/50 top-1/4 p-3">
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${currentItem * 100}%)` }}
      >
      {children}
      </div>
      <div className="flex items-center justify-between absolute inset-0 mx-14">
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

export default Carousel;
