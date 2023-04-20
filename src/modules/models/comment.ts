import { v4 as uuidv4 } from "uuid";
import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
    id: {type: String, required: true},
    email: {type: String, required: true},
    postId: {type: String, required: true},
    postTitle: {type: String, required: true},
    content: {type: String, required: true},
    replys: {type: Array, required: true},
    created_at: {type: String, required: true},
});

const comments = models.Comments || model("Comments", CommentSchema);

class Comment {
    id?: string;
    email: string;
    postId: string;
    postTitle: string;
    content: string;
    replys: Comment[];
    created_at: Date;

    constructor({
        postTitle,
        content,
        created_at,
        postId,
        replys,
        email,
    }: Comment) {
        if (!this.id) {
            this.id = uuidv4();
        }
        this.email = email;
        this.postTitle = postTitle;
        this.postId = postId;
        this.content = content;
        this.created_at = created_at;
        this.replys = replys;
    }
}

export { CommentSchema, comments, Comment };
