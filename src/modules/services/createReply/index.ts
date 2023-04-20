import { CommentRepository } from "../../repository/commentRepository";
import { CreateReplyController } from "./CreateReplyController";
import { CreateReplyService } from "./CreateReplyService";

const commentRepository = new CommentRepository;
const createReplyService = new CreateReplyService(commentRepository);
const createReplyController = new CreateReplyController(createReplyService);

export { createReplyController };
