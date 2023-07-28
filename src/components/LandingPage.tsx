import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

const LandingPage: React.FC = () => {
  return (
    <main className="h-screen w-screen bg-gray-800 bg-cover bg-center">
      <Carousel className="mt-10">
        <CarouselItem>
          <div className="flex flex-wrap justify-center content-end mx-auto h-full w-4/5 bg-slate-300">
            <div className="flex flex-col basis-[10%] h-full">
              <img src="src/assets/portada-juego-1.webp" alt=""/>
              <div className="bg-red-600 w-full h-1/3 mt-auto">#2</div>
            </div>
            <div className="flex flex-wrap flex-col basis-[10%] h-full">
              <div className="bg-yellow-400 w-full h-1/2 mt-auto">#1</div>
            </div>
            <div className="flex flex-col basis-[10%] h-full">
              <div className="bg-green-700 w-full h-1/4 mt-auto">#3</div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <h1>asdfs</h1>
          <h1>asdf</h1>
          <h1>asdf</h1>
        </CarouselItem>
      </Carousel>
    </main>
  );
};

export default LandingPage;
