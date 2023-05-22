// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  if (!apiUrl || !apiKey) {
    throw new Error("API_URL or API_KEY is not defined");
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify(req.body),
  });
  const result = await response.json();
  res.status(404).json(result);
}
