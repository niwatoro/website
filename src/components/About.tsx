import Image from "next/image";
import { FC } from "react";
import { MyTitle } from "./MyTitle";

export const About: FC = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row-reverse text-white justify-between border-y-8 border-y-black">
      <div className="md:w-1/3 w-full bg-red-500 flex flex-col justify-end h-1/2 md:h-full">
        <Image className="md:object-cover object-contain h-full w-full" src={"/images/couple.png"} alt="selfie" width={9999} height={9999} />
      </div>
      <div className="md:pb-28 py-8 md:pt-12 px-14 flex flex-col gap-y-5 justify-between md:w-2/3">
        <MyTitle>About</MyTitle>
        <div className="text-lg font-medium gen flex flex-col gap-y-2">
          <p>
            こんにちは、俺はにわとろ。起業家です。
            <br />
            25歳までに100億円稼ぎます。
          </p>
          <p>とりあえず今は結婚したので、早くロマンチックな結婚式を挙げて豪邸を建てないといけません。</p>
          <p>そのせいで仕方なくエンジニアをしていますが、早く経営者になって大きく稼ぎたいです。</p>
        </div>
      </div>
    </div>
  );
};
