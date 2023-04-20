import { dataBase } from "../../libs/dataBase/mongodb";
import { Comment, comments } from "../models/comment";
import {
    ICreateCommentDTO,
    IcommentRepository,
} from "./InterfaceCommentRespository";
import { v4 as uuidv4 } from "uuid";

class CommentRepository implements IcommentRepository {
    
    async createComment({
        email,
        content,
        postId,
        postTitle,
    }: ICreateCommentDTO): Promise<any> {
        
        dataBase.connect()
        
        const replys = [];
        const id = uuidv4();
        const date = new Date();
        const created_at = date.toString();

        const comment = new comments({
            id,
            email,
            content,
            postId,
            postTitle,
            replys,
            created_at,
        });
        return await comment.save();
        
    }

    async createReply({
        email,
        content,
        postId,
        postTitle,
        commentId,
    }: ICreateCommentDTO) {
        
        dataBase.connect()
       
        const replys = [];
        const id = uuidv4();
        const date = new Date();
        const created_at = date.toString();

        const comment = new comments({
            id,
            email,
            content,
            postId,
            postTitle,
            replys,
            created_at,
        });
        const doc = await comments.findOne({id: commentId}); 
        console.log(doc)
        doc.replys = [...doc.replys, comment];
        await doc.save();

        return doc;
        
    }

    async listComments(postId: string):  Promise<any> {
        
        dataBase.connect()
        const doc = await comments.find({postId: postId});
        
        return doc;
        
    }

}

export { CommentRepository };
