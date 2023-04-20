import { CommentRepository } from "../../repository/commentRepository";
import { CreateCommentController } from "./CreateCommentController";
import { CreateCommentService } from "./CreateCommentService";

const commentRepository = new CommentRepository;
const createCommentService = new CreateCommentService(commentRepository);
const createCommentController = new CreateCommentController(
    createCommentService
);

export { createCommentController };
