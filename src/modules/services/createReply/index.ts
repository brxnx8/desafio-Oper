import { CommentRepository } from "../../repository/commentRepository";
import { CreateReplyController } from "./CreateReplyController";

const commentRepository = new CommentRepository;
const createReplyController = new CreateReplyController(commentRepository);

export { createReplyController };
