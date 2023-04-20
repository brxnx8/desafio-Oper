import {
    ICreateCommentDTO,
    IcommentRepository,
} from "../../repository/InterfaceCommentRespository";

class CreateCommentService {
    constructor(private commentRepository: IcommentRepository) {
        this.commentRepository = commentRepository;
    }
    async execute({ email, content, postId, postTitle }: ICreateCommentDTO) {
        if (!email || !content || !postId || !postTitle) {
            throw new Error("Need all the data to create a comment");
        }

        return await this.commentRepository.createComment({
            email,
            content,
            postId,
            postTitle,
        })

        ;
    }
}

export { CreateCommentService };
