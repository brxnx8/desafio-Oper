import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    email: { type: String, required: true },
    content: { type: String, required: true },
    postId: { type: String, required: true },
    commentId: { type: String, required: false },
    replies: { type: Array, required: false },
    created_at: { type: String, required: true },
});

const comments =
    mongoose.models.Comments || mongoose.model("Comments", CommentSchema);

export default comments;
