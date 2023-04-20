import { ArticleContainer } from "../../styles/style_pages/article";
import { Comment, CommentContainer, CommentForm, ReplyContainer } from "../../styles/style_pages/article/comments";

import Image from "next/image";
import { GetStaticProps } from "next";

import { Post } from "..";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

const api = axios.create()

interface IReply{
    id: string;
    email: string;
    postId: string;
    content: string;
    commentId: string,
    like: {
        class: string,
        content: string
    };
}

interface IComment{
    id: string;
    email: string;
    postId: string;
    content: string;
    replies: IReply[];
    like: {
        class: string,
        content: string
    };
    isReplying: boolean
}

interface PostProps {
    post: Post;
}

interface CommentForms {
    email: string;
    content: string;
}

interface ReplyForms {
    emailReply: string;
    contentReply: string;
}

export default function Post({ post }: PostProps) {

    const tags = post.tags.join(", ");
    const published = post.published.split("T");
    const date = published[0].split("-").reverse().join("/");
    const [comments, setComments] = useState<IComment[]>([]);
    const [commentForm, setCommentForm] = useState<CommentForms>({content: '', email: ''});
    const [replyForm, setReplyForm] = useState<ReplyForms>({contentReply: '', emailReply: ''});
   

    function handleLike(commentId: string, replyId?: string){
        
        const commentChange = comments.find(comment => comment.id === commentId);

        setComments(state => {
            return state.map( comment => {
                if(comment === commentChange){
                    if(!replyId){
                        if(comment.like.content === "Like"){
                            return{
                                ...comment,
                                like: {
                                    class: "liked",
                                    content: "Liked"
                                }
                            }
                        }else{
                            return{
                                ...comment,
                                like: {
                                    class: "",
                                    content: "Like"
                                }
                            }
                        }
                    }else{
                        const replies = comment.replies.map(reply => {
                            if(reply.id === replyId){
                                if(reply.like.content === "Like"){
                                    return{
                                        ...reply,
                                        like: {
                                            class: "liked",
                                            content: "Liked"
                                        }
                                    }
                                }else{
                                    return{
                                        ...reply,
                                        like: {
                                            class: "",
                                            content: "Like"
                                        }
                                    }
                                }
                            }
                            return reply
                        })
                        return{
                            ...comment,
                            replies,
                        }
                    }
                }
                return comment
            })
            
        })

        

    }

    function handleReplying(id: string){
        setComments(state => {
            return state.map(comment => {
                if(comment.id === id){
                    if(comment.isReplying){
                        return{
                            ...comment,
                            isReplying: false
                        };
                    }else{
                       return {
                        ...comment,
                        isReplying: true
                       };
                    }
                }else{
                    return comment;
                }
            })
        })
    }

    function handleChangeFormValues(event) {
        const name = event.target.name;
        const value = event.target.value;

        if(!name.includes("Reply")){
            setCommentForm(state => {
                return {
                    ...state,
                    [name]: value,
                }
            });
        }else{
            setReplyForm(state => {
                return {
                    ...state,
                    [name]: value,
                }
            });
        }

        

    }

    function handleSubmitComment(event: FormEvent, commentId?: string){
        event.preventDefault()
        
        const apiData = async () => {
            try {
                const data ={
                    email: commentForm.email,
                    content: commentForm.content,
                    postId: post.id,
	                postTitle: post.title,
                    commentId
                }
                if(!commentId){
                    await api.post("http://localhost:3000/api/comment", data);
                }
                else{
                    await api.post("http://localhost:3000/api/reply", data);
                }
               
                
            } catch (error) {
                window.alert(error)
            }
        };
        apiData();

        
    }

    useEffect(() => {
        const apiData = async () => {
            try {
                const config = {
                    headers:{
                      postid: post.id,
                    }
                  };
                const res = await api.get("http://localhost:3000/api/comment", config);
                const data = res.data.map( comment => {
                    const replies = comment.replys.map(reply => {
                        return{
                            id: reply.id,
                            email: reply.email,
                            postId: reply.postId,
                            content: reply.content,
                            commentId: reply.commentId,
                            like: {
                                class: "",
                                content: "Like"
                            },
                        }
                    })
                    
                    return{
                        id: comment.id,
                        email: comment.email,
                        postId: comment.postId,
                        content: comment.content,
                        replies,
                        like: {
                            class: "",
                            content: "Like"
                        },
                        isReplying: false
                    }
                })
                setComments(data);
                
            } catch (error) {
                window.alert(error)
            }
        };
        apiData();
    }, [])

    return (
        <ArticleContainer>
           <section>
               <aside>
                   <Image src={post.coverImage} alt="" width={300} height={300}/>
                   <div>
                       <p>{tags}</p>
                       <p>Autor: {post.author}</p>
                       <p>Atualizado em: {date}</p>
                   </div>
               </aside>
               <div>
                   <h1>{post.title}</h1>
                   <p>{post.content}</p>
               </div>
               
           </section>
           <CommentContainer>
                <h2>Comentarios:</h2>

                <CommentForm onSubmit={handleSubmitComment}>
                    <p><strong>Deixe seu comentario:</strong></p>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required placeholder="Digite seu email..." onChange={handleChangeFormValues} value={commentForm.email}/>
                    <textarea name="content" placeholder="Comente..." required onChange={handleChangeFormValues} value={commentForm.content}/>
                    <button>Comentar</button>
                </CommentForm>
                {
                    comments.length < 1 ? <h4>carregando comentarios...</h4> 
                    : 
                    comments.map(comment => {
                        return(
                            <>
                                <Comment key={comment.id}>
                                    <h4>{comment.email}</h4>
                                    <textarea disabled value={comment.content} />
                                    <footer>
                                        <span className={comment.like.class} onClick={() => {handleLike(comment.id)}}>{comment.like.content}</span>
                                        <span onClick={() => {handleReplying(comment.id)}}>Responda</span>
                                    </footer>
                                </Comment>

                                <ReplyContainer>
                                    {comment.replies.length > 0 &&
                                        <>
                                        <h5>Respostas:</h5>
                                        {comment.replies.map(reply => {
                                            return(
                                                <Comment key={reply.id} className="reply">
                                                    <h4>{reply.email}</h4>
                                                    <textarea disabled value={reply.content} />
                                                    <footer>
                                                        <span className={reply.like.class} onClick={() => {handleLike(reply.commentId, reply.id)}}>{reply.like.content}</span>
                                                    </footer>
                                                </Comment>
                                            )
                                        })
                                        }
                                        </>
                                    }

                                    {comment.isReplying &&
                                        <CommentForm className="replying" onSubmit={event => handleSubmitComment(event, comment.id)}>
                                            <p><strong>Deixe sua resposta:</strong></p>
                                            <label htmlFor="email">Email:</label>
                                            <input type="text" name="emailReply" id="email" required placeholder="Digite seu email..." onChange={handleChangeFormValues} value={replyForm.emailReply}/>
                                            <textarea name="contentReply" placeholder="Comente..." required onChange={handleChangeFormValues} value={replyForm.contentReply}/>
                                            <button>Comentar</button>
                                        </CommentForm>
                                    }
                                </ReplyContainer>
                            </>
                        )
                    })
                }

                
                
           </CommentContainer>
        </ArticleContainer>
        
    );
}

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: "blocking",
    }
  }

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {

    const id = params.id;
    
    const res = await api.get(`https://news-api.lublot.dev/api/posts/${id}`);
    const post = res.data;

    if (!res) {
        return {
          notFound: true,
        }
      }

    return{
        props: {
            post
        },
        revalidate: 3600,
    }
}
