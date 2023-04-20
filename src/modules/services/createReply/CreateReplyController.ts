import { NextApiRequest, NextApiResponse } from "next";
import { CreateReplyService } from "./CreateReplyService";

class CreateReplyController {
    constructor(private createReplyService: CreateReplyService) {
        this.createReplyService = createReplyService;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { email, content, postId, postTitle, commentId } = req.body;

        if (!email || !content || !postId || !postTitle || !commentId) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.createReplyService.execute({
            email,
            content,
            postId,
            postTitle,
            commentId,
        });
    }
}

export { CreateReplyController };
