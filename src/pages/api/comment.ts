import { NextApiRequest, NextApiResponse } from "next";
import { createCommentController } from "../../modules/services/createComment";
import { listAllCommentsController } from "../../modules/services/listAllComments";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        await createCommentController.handle(req, res)
        .then(data => res.status(201).json(data))
        .catch(err => res.json(err))
    } 
    if(req.method === "GET"){
        await listAllCommentsController.handle(req, res)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
    else{
        return res.status(405);
    }
    
}
