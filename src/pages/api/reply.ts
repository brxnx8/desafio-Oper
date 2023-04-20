import { NextApiRequest, NextApiResponse } from "next";
import { createReplyController } from "../../modules/services/createReply";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        await createReplyController
            .handle(req, res)
            .then((data) => res.status(201).json(data))
            .catch((err) => res.json(err));
    } else {
        return res.status(405);
    }
}
