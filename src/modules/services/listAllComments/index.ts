import { CommentRepository } from "../../repository/commentRepository";
import { ListAllCommentsController } from "./ListAllCommentsController";

const commentRepository = new CommentRepository;
const listAllCommentsController = new ListAllCommentsController(commentRepository);

export { listAllCommentsController };
