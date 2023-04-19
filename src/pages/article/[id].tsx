import { ArticleContainer } from "../../styles/style_pages/article";
import { Comment, CommentContainer, CommentForm } from "../../styles/style_pages/article/comments";

import Image from "next/image";
import { GetStaticProps } from "next";

import { Post } from "..";

interface PostProps {
    post: Post;
}

export default function Post({ post }: PostProps) {

    const tags = post.tags.join(", ");
    const published = post.published.split("T");
    const date = published[0].split("-").reverse().join("/");

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

                <CommentForm>
                    <p><strong>Deixe seu comentario:</strong></p>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required placeholder="Digite seu email..."/>
                    <textarea placeholder="Comente..." required/>
                    <button>Comentar</button>
                </CommentForm>

                <Comment>
                    <h4>usuario@email.com</h4>
                    <textarea disabled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id placeat eius 
                        officia iste a dicta officiis eum cum et, iure reprehenderit minima aperiam suscipit iusto 
                        laboriosam distinctio, saepe cumque.
                    </textarea>
                    <footer>
                        <span>Like</span>
                        <span>Responda</span>
                    </footer>
                </Comment>
                <Comment>
                    <h4>usuario@email.com</h4>
                    <textarea disabled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id placeat eius 
                        officia iste a dicta officiis eum cum et, iure reprehenderit minima aperiam suscipit iusto 
                        laboriosam distinctio, saepe cumque.
                    </textarea>
                    <footer>
                        <span>Like</span>
                        <span>Responda</span>
                    </footer>
                </Comment>
                <Comment>
                    <h4>usuario@email.com</h4>
                    <textarea disabled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id placeat eius 
                        officia iste a dicta officiis eum cum et, iure reprehenderit minima aperiam suscipit iusto 
                        laboriosam distinctio, saepe cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Quisquam, iusto iure molestiae repudiandae doloribus aperiam ratione maiores suscipit 
                        enim adipisci corrupti nostrum voluptas maxime officia optio, dolor distinctio eos praesentium?
                    </textarea>
                    <footer>
                        <span>Like</span>
                        <span>Responda</span>
                    </footer>
                </Comment>
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
    
    const data = await fetch(`https://news-api.lublot.dev/api/posts/${id}`);
    const post = await data.json();

    return{
        props: {
            post
        },
        revalidate: 3600,
    }
}
