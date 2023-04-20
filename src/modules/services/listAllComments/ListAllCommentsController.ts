import { NextApiRequest, NextApiResponse } from "next";
import { CommentRepository } from "../../repository/commentRepository";

class ListAllCommentsController {
    constructor(private commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { postid } = req.headers;
        
        if (!postid) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.commentRepository.listComments(postid as string)
    }
}

export { ListAllCommentsController };
