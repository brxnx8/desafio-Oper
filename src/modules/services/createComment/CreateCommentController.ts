import { NextApiRequest, NextApiResponse } from "next";
import { CreateCommentService } from "./CreateCommentService";

class CreateCommentController {
    constructor(private createCommentService: CreateCommentService) {
        this.createCommentService = createCommentService;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { email, content, postId, postTitle } = req.body;
        return await this.createCommentService.execute({
            email,
            content,
            postId,
            postTitle,
        })
    }
}

export { CreateCommentController };
