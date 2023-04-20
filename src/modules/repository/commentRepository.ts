import db from "../../libs/dataBase/mongodb";
import comments from "../models/Comments";

import { v4 as uuidv4 } from "uuid";

class CommentRepository{


    
    async createComment({
        email,
        content,
        postId,
    }) {
        
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
    }) {
        
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
        const doc = await comments.findOne({id: commentId}); 
        console.log(doc)
        doc.replies = [...doc.replies, comment];
        await doc.save();

        return doc;
        
    }

    async listComments(postId: string) {
        db.connect();

        const doc = await comments.find({postId: postId});
        
        return doc;
        
    }

}

export { CommentRepository };
