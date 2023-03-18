import { ZennPost } from "@/pages/api/zenn";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

export const ZennFeed: FC = () => {
  const [posts, setPosts] = useState<ZennPost[]>();

  useEffect(() => {
    fetch("/api/zenn")
      .then((res) => res.json())
      .then((data: ZennPost[]) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="h-full overflow-scroll">
      {posts?.map((post, index) => (
        <ZennFeedCell key={index} post={post} />
      ))}
    </div>
  );
};

interface ZennFeedCellProps {
  post: ZennPost;
}
const ZennFeedCell: FC<ZennFeedCellProps> = ({ post }) => {
  if (!post) {
    return <div>loading...</div>;
  }

  const date = new Date(post.date);

  return (
    <Link href={post.slug} target="_blank">
      <div className="group/zenn hover:bg-[#F6F9F9]">
        <div className="h-1/3">
          <Image className="group-hover/zenn:opacity-50 object-cover h-full" src={post?.enclosure.url} alt="zenn" width={9999} height={9999} />
        </div>
        <div className="h-2/3 px-5 py-5 gen flex flex-col gap-y-5 text-sm">
          <div className="text-lg font-bold">{post?.title}</div>
          <div>{post.description}</div>
          <div className="text-gray-500 font-bold">{date.toDateString()}</div>
        </div>
      </div>
    </Link>
  );
};
