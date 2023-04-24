import { NextApiRequest, NextApiResponse } from "next";
import { CommentRepository } from "../../repository/commentRepository";

class CreateCommentController {
    constructor(private commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { email, content } = req.body;
        const { postid } = req.headers;

        if (!email || !content || !postid) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.commentRepository.createComment({
            email,
            content,
            postId: postid,
        });
    }
}

export { CreateCommentController };
