import { CommentRepository } from "../../repository/commentRepository";
import { ListAllCommentsController } from "./ListAllCommentsController";
import { ListAllCommentsService } from "./ListAllCommentsService";

const commentRepository = new CommentRepository;
const listAllCommentsService = new ListAllCommentsService(commentRepository);
const listAllCommentsController = new ListAllCommentsController(
    listAllCommentsService
);

export { listAllCommentsController };
