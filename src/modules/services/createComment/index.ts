import { CommentRepository } from "../../repository/commentRepository";
import { CreateCommentController } from "./CreateCommentController";

const commentRepository = new CommentRepository();
const createCommentController = new CreateCommentController(commentRepository);

export { createCommentController };
