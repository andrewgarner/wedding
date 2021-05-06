// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Hello = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Hello>) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
