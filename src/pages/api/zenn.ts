// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";

export type ZennPost = {
  title: string;
  description: string;
  date: string;
  slug: string;
  enclosure: {
    url: string;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ZennPost[]>) {
  const feed = await new Parser().parseURL("https://zenn.dev/niwatoro/feed?all=1");
  if (!feed) {
    res.status(404).json([{ title: "Not Found", description: "", date: "", slug: "", enclosure: { url: "" } }]);
    return;
  } else {
    res.status(200).json(feed.items.map((item) => ({ title: item.title ?? "", description: item.contentSnippet ?? "", date: item.isoDate ?? "", slug: item.link ?? "", enclosure: { url: item.enclosure?.url ?? "" } })));
  }
}
