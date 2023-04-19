
import Image from "next/image";
import { ArticleContainer } from "../../styles/style_pages/article";
import { CommentContainer } from "../../styles/style_pages/article/comments";
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
                <p>comentario</p>
                <p>comentario</p>
                <p>comentario</p>
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
