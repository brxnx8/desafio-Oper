import { NextApiRequest, NextApiResponse } from "next";
import { CommentRepository } from "../../repository/commentRepository";


class CreateReplyController {
    constructor(private commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { email, content, postId, commentId } = req.body;

        if (!email || !content || !postId || !commentId) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.commentRepository.createReply({
            email,
            content,
            postId,
            commentId,
        });

    }
}

export { CreateReplyController };
