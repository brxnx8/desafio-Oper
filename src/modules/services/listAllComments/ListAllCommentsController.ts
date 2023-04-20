import { NextApiRequest, NextApiResponse } from "next";
import { ListAllCommentsService } from "./ListAllCommentsService";

class ListAllCommentsController {
    constructor(private listAllCommentsService: ListAllCommentsService) {
        this.listAllCommentsService = listAllCommentsService;
    }
    async handle(req: NextApiRequest, res: NextApiResponse) {
        const { postid } = req.headers;
        return await this.listAllCommentsService.execute(postid as string)
    }
}

export { ListAllCommentsController };
