import { ArticleContainer } from "../../styles/style_pages/article";
import { Comment, CommentContainer, CommentForm } from "../../styles/style_pages/article/comments";

import Image from "next/image";
import { GetStaticProps } from "next";

import { Post } from "..";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

const api = axios.create()

interface PostProps {
    post: Post;
}

interface CommentForms {
    email: string;
    content: string;
}

export default function Post({ post }: PostProps) {

    const tags = post.tags.join(", ");
    const published = post.published.split("T");
    const date = published[0].split("-").reverse().join("/");
    const [comments, setComments] = useState([]);
    const [commentForm, setCommentForm] = useState({} as CommentForms)

    function handleChangeFormValues(event) {
        const name = event.target.name;
        const value = event.target.value;

        setCommentForm(state => {
            return {
                ...state,
                [name]: value,
            }
        });

    }

    function handleSubmitComment(event: FormEvent){
        const apiData = async () => {
            try {
                const data ={
                    email: commentForm.email,
                    content: commentForm.content,
                    postId: post.id,
	                postTitle: post.title,
                }
                await api.post("http://localhost:3000/api/comment", data);
               
                
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
                setComments(res.data);
                
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
                    comments.length > 0 &&
                    comments.map(comment => {
                        return(
                            <Comment key={comment.id}>
                                <h4>{comment.email}</h4>
                                <textarea disabled value={comment.content} />
                                <footer>
                                    <span>Like</span>
                                    <span>Responda</span>
                                </footer>
                            </Comment>
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
