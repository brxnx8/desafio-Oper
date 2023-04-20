import { NextApiRequest, NextApiResponse } from "next";
import { CommentRepository } from "../../repository/commentRepository";

class CreateCommentController {
    constructor(private commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { email, content, postId } = req.body;

        if (!email || !content || !postId) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.commentRepository.createComment({
            email,
            content,
            postId,
        })
    }
}

export { CreateCommentController };
