import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MyTitle } from "./MyTitle";
import { useLocale } from "./locales/use-locale";

export const News: FC = () => {
  const { t } = useLocale();

  return (
    <div className="w-full h-full md:flex justify-between bg-white border-y-8 border-y-black">
      <div className="pb-28 pt-12 px-14 flex flex-col justify-between md:w-1/3 h-1/3 md:border-b-0 border-b-8 border-b-black">
        <MyTitle>News</MyTitle>
      </div>
      <div className="md:w-2/3 md:h-full h-2/3">
        <div className="w-full flex h-1/2">
          <NewsCard title={t.SITE_UPDATED} url="/" imageUrl="/images/newsite.png" initialRow date="2023/03/17" />
          <NewsCard title={t.HATENA_HOT_ENTRY} url="https://b.hatena.ne.jp/entry/s/zenn.dev/niwatoro/articles/51f22ab69e0c9b#utm_campaign=bookmark_share&utm_content=zenn.dev&utm_medium=social&utm_source=twitter&utm_term=%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%20ChatGPT" imageUrl="/images/hatena.png" noBorder initialRow date="2023/03/13" />
        </div>
        <div className="w-full flex h-1/2">
          <NewsCard title={t.TODAI_ENROLLED} url="http://www.kikaib.t.u-tokyo.ac.jp/" imageUrl="/images/u-tokyo.jpg" date="2023/03/09" />
          <NewsCard title={t.HSK6} date="2023/01/04" imageUrl="/images/hsk6.jpg" noBorder url="https://www.hskj.jp/level/w_6/" />
        </div>
      </div>
    </div>
  );
};

interface NewsCardProps {
  url: string;
  title: string;
  imageUrl: string;
  noBorder?: boolean;
  initialRow?: boolean;
  date: string;
}
const NewsCard: FC<NewsCardProps> = ({ url, title, imageUrl, noBorder, initialRow, date }) => {
  const formattedDate = new Date(date);
  return (
    <div className="w-1/2">
      <Link href={url} target="_blank">
        <div className={`h-full ${noBorder ? "" : "md:border-l-8 border-r-8 border-x-black"} hover:bg-gray-800 group/work flex flex-col`}>
          <div className={`pb-3 pt-3 bg-white text-black ${initialRow ? "" : "border-t-black border-t-8"} px-2 flex flex-col justify-center`}>
            <div className="gen font-bold text-xl w-full text-ellipsis whitespace-nowrap overflow-hidden">{title}</div>
            <div className="font-bold text-sm text-gray-600">{formattedDate.toDateString()}</div>
          </div>
          <Image className="object-cover group-hover/work:opacity-70 h-full overflow-hidden" src={imageUrl} alt="baka" width={9999} height={9999} />
        </div>
      </Link>
    </div>
  );
};
