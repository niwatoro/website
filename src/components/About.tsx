import Image from "next/image";
import { FC } from "react";
import { MyTitle } from "./MyTitle";
import { useLocale } from "./locales/use-locale";

export const About: FC = () => {
  const { t } = useLocale();

  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row-reverse text-white justify-between border-y-8 border-y-black">
      <div className="md:w-1/3 w-full bg-red-500 flex flex-col justify-end h-1/3 md:h-full">
        <Image className="md:object-cover object-contain h-full w-full" src={"/images/couple.png"} alt="selfie" width={9999} height={9999} />
      </div>
      <div className="md:pb-28 py-8 md:pt-12 h-2/3 md:h-full px-14 flex flex-col gap-y-5 justify-between md:w-2/3">
        <MyTitle>About</MyTitle>
        <div className="text-lg font-medium gen flex flex-col gap-y-2">
          <p>
            {t.HELLO_IM_NIWATORO}
            <br />
            {t.IM_PIONEER}
          </p>
          <p>{t.IM_MARRIED_SO}</p>
          <p>{t.ENGINEER_BUT_EXECUTIVE}</p>
        </div>
      </div>
    </div>
  );
};
