import Image from "next/image";
import { FC } from "react";

export const Top: FC = () => {
  return (
    <div className="h-full w-full bg-red-500 flex flex-col">
      <div className="flex-1 relative">
        <div className="h-[150vh] w-full conic absolute flex items-center justify-center">
          <div className="md:w-96 md:h-96 w-[450px] h-[450px] rounded-full bg-red-500"></div>
        </div>
        <div className="flex h-full items-end absolute">
          <Image className="h-1/2 object-cover" src={"/images/city.png"} alt="city" width={9999} height={9999} />
        </div>
        <Image className="object-contain bottom-0 max-h-96 absolute" src={"/images/penguin.png"} alt="penguin" width={9999} height={9999} />
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl px-5 pt-3 z-0 bg-white addsbp flex items-center justify-center">Hello, I'm Niwatoro. Entrepreneur.</div>
    </div>
  );
};
