import { Comment, comments } from "../models/comment";

export interface ICreateCommentDTO {
    email: string;
    content: string;
    postId: string;
    postTitle: string;
    commentId?: string;
}

export interface IcommentRepository {
    createComment({
        email,
        content,
        postId,
        postTitle,
    }: ICreateCommentDTO): Promise<any>;
    createReply({
        email,
        content,
        postId,
        postTitle,
        commentId,
    }: ICreateCommentDTO);
    listComments(postId: string): Promise<any>;
}
