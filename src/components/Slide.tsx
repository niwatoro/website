import { FC, ReactNode } from "react";

interface SlideProps {
  children?: ReactNode;
  className?: string;
  id: string;
}
export const Slide: FC<SlideProps> = ({ children, className, id }) => {
  return (
    <div id={id} className={`w-screen h-screen bg-black overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
