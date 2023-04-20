import {
    ICreateCommentDTO,
    IcommentRepository,
} from "../../repository/InterfaceCommentRespository";

class CreateReplyService {
    constructor(private commentRepository: IcommentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute({
        email,
        content,
        postId,
        postTitle,
        commentId,
    }: ICreateCommentDTO) {
        return await this.commentRepository.createReply({
            email,
            content,
            postId,
            postTitle,
            commentId,
        });
    }
}

export { CreateReplyService };
