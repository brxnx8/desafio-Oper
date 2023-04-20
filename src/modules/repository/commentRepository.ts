import db from "../../libs/dataBase/mongodb";
import comments from "../models/Comments";

import { v4 as uuidv4 } from "uuid";

export interface CommentsPropsDTO{
    email: string;
    content: string;
    postId: string;
}

export interface RepliesPropsDTO{
    email: string;
    content: string;
    postId: string;
    commentId: string;
}

class CommentRepository{


    
    async createComment({
        email,
        content,
        postId,
    }: CommentsPropsDTO): Promise<Comment>{
        
        db.connect();
        
        const replies = [];
        const id = uuidv4();
        const date = new Date();
        const created_at = date.toString();

        const comment = new comments({
            id,
            email,
            content,
            postId,
            replies,
            created_at,
        });
        return await comment.save();
        
    }

    async createReply({
        email,
        content,
        postId,
        commentId,
    }: RepliesPropsDTO): Promise<Comment>{
        
        db.connect();
        
        const id = uuidv4();
        const date = new Date();
        const created_at = date.toString();

        const comment = new comments({
            id,
            email,
            content,
            postId,
            commentId,
            created_at,
        });
        // @ts-ignore: Unreachable code error <O erro se da por conta dos tipos da biblioteca mongoose>
        const doc = await comments.findOne({id: commentId}); 
        doc.replies = [...doc.replies, comment];
        await doc.save();

        return doc;
        
    }

    async listComments(postId: string): Promise<Comment[]>{
        db.connect();
        // @ts-ignore: Unreachable code error <O erro se da por conta dos tipos da biblioteca mongoose>
        const doc = await comments.find({postId: postId});
        
        return doc;
        
    }

}

export { CommentRepository };
