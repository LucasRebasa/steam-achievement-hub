import { type ReactNode } from 'react';

interface Props {
  children: ReactNode[] | ReactNode
  className?: string
} 

const CarouselItem: React.FC<Props> = ({ children }) => {
  return <div className="basis-full flex-shrink-0 text-center">{children}</div>;
};

export default CarouselItem;
