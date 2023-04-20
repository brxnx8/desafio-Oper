import {
    ICreateCommentDTO,
    IcommentRepository,
} from "../../repository/InterfaceCommentRespository";

class ListAllCommentsService {
    constructor(private commentRepository: IcommentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute(postId: string) {
        if (!postId) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.commentRepository.listComments(postId)

    }
}

export { ListAllCommentsService };
