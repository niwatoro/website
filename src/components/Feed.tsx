import Link from "next/link";
import { FC } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { MyTitle } from "./MyTitle";
import { ZennFeed } from "./ZennFeed";

export const Feed: FC = () => {
  return (
    <div className="h-full w-full bg-white md:flex">
      <div className="md:pb-28 pt-14 px-14 md:flex flex-col justify-between md:w-1/3">
        <MyTitle>Feed</MyTitle>
        <div className="text-lg font-medium gen flex flex-col gap-y-2 my-5">
          <UnderlineLink href="https://www.facebook.com/profile.php?id=100086860115240">Facebook</UnderlineLink>
          <UnderlineLink href="https://www.instagram.com/niwatoro277/">Instagram</UnderlineLink>
        </div>
      </div>
      <div className="md:w-2/3 md:flex h-full">
        <div className="md:w-1/2 md:h-full h-2/5 bg-white flex flex-col justify-end md:border-x-8 md:border-x-black">
          <div className="h-10 py-2 flex items-center justify-start gen font-black text-2xl pl-2">Twitter</div>
          <div className="h-full">
            <TwitterTimelineEmbed noBorders sourceType="profile" screenName="niwatoro277" autoHeight noHeader />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="h-10 py-1 gen font-black text-2xl pl-2">Zenn</div>
          <ZennFeed />
        </div>
      </div>
    </div>
  );
};

interface UnderlineLinkProps {
  href: string;
  children: React.ReactNode;
}
const UnderlineLink: FC<UnderlineLinkProps> = ({ href, children }) => {
  return (
    <Link className="hover:underline" href={href} target="_blank">
      {children}
    </Link>
  );
};
