import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MyTitle } from "./MyTitle";

export const Works: FC = () => {
  return (
    <div className="w-full h-full md:flex text-white justify-between border-t-8 border-t-black">
      <div className="pb-28 pt-12 px-14 flex flex-col md:w-1/3 justify-between h-1/3 md:h-full">
        <MyTitle>Works</MyTitle>
      </div>
      <div className="md:w-2/3 h-full">
        <div className="w-full border-x-black flex md:h-1/2 h-1/3">
          <WorkCard
            url="https://zenn.dev/niwatoro/articles/51f22ab69e0c9b"
            title="「有能なバカ」ChatGPTを使って1週間でiOSアプリを公開する方法"
            imageUrl="https://res.cloudinary.com/zenn/image/upload/s--f2u2tufJ--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2580%258C%25E6%259C%2589%25E8%2583%25BD%25E3%2581%25AA%25E3%2583%2590%25E3%2582%25AB%25E3%2580%258DChatGPT%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A61%25E9%2580%25B1%25E9%2596%2593%25E3%2581%25A7iOS%25E3%2582%25A2%25E3%2583%2597%25E3%2583%25AA%25E3%2582%2592%25E5%2585%25AC%25E9%2596%258B%25E3%2581%2599%25E3%2582%258B%25E6%2596%25B9%25E6%25B3%2595%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:%25E3%2581%25AB%25E3%2582%258F%25E3%2581%25A8%25E3%2582%258D%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4YUpCd3BaV3JlcjBJcW9fdlhmSDBRdXFncXEwbml2MUZKMjlYZlQyZz1zOTYtYw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"
            initialRow
            date="2023/03/10"
          />
          <WorkCard url="https://apps.apple.com/jp/app/friendule/id6446141270?l=en" title="Friendule" imageUrl="/images/friendule.png" noBorder initialRow date="2023/03/09" />
        </div>
        <div className="w-full md:h-1/2 flex h-1/3">
          <WorkCard url="https://apps.apple.com/jp/app/cooru/id1668549169?l=en" title="Cooru!" imageUrl="/images/cooru.png" date="2023/02/23" />
          <WorkCard url="https://apps.apple.com/jp/app/ai%E3%82%AB%E3%82%A4%E3%82%AE/id1661897730?l=en" title="AIカイギ" imageUrl="/images/aikaigi.png" noBorder date="2023/01/10" />
        </div>
      </div>
    </div>
  );
};

interface WorkCardProps {
  url: string;
  title: string;
  imageUrl: string;
  noBorder?: boolean;
  initialRow?: boolean;
  date: string;
}
const WorkCard: FC<WorkCardProps> = ({ url, title, imageUrl, noBorder, initialRow, date }) => {
  const formattedDate = new Date(date);
  return (
    <div className="w-1/2 h-full">
      <Link href={url} target="_blank">
        <div className={`h-full ${noBorder ? "" : "md:border-l-8 border-r-8 border-x-black"} hover:bg-gray-800 group/work flex flex-col`}>
          <div className={`pb-4 pt-2 bg-black text-white ${initialRow ? "" : "border-t-black border-t-8"} px-2`}>
            <div className="gen font-bold text-xl w-full text-ellipsis whitespace-nowrap overflow-hidden">{title}</div>
            <div className="font-bold text-sm text-gray-300">{formattedDate.toDateString()}</div>
          </div>
          <Image className="object-cover group-hover/work:opacity-70 h-full w-full overflow-hidden" src={imageUrl} alt="baka" width={9999} height={9999} />
        </div>
      </Link>
    </div>
  );
};
