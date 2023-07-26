import Carrousel from './Carrousel';

const LandingPage: React.FC = () => {
  return (
    <main className="h-screen w-screen bg-[url('/src/assets/bg-landing.jpg')] bg-cover bg-center grayscale">
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[2px] z-[-1]"></div>
      <Carrousel />
    </main>
  );
};

export default LandingPage;
