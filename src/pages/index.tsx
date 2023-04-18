import { HomeContainer } from "../styles/style_pages/home";
import { PostCard, PostContainer } from "../styles/style_pages/home/post";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";
import { GetServerSideProps } from "next";
import { useFetch } from "../libs/functions/useFetch";

export interface Post{
    id: string;
    title: string;
    content: string;
    author: string;
    published: string;
    coverImage: string;
    tags: string[];
}
interface HomeProps{
    recentPosts: Post[];
}


export default function Home({recentPosts}: HomeProps) {
    
    const {response: posts} = useFetch("https://news-api.lublot.dev/api/posts");

    const [refSlider] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,

        },

    })

    return (
        <HomeContainer>
            <h1>Posts recentes</h1>
            <section ref={refSlider} className="keen-slider">
                {
                    recentPosts.map(post => {

                        const tags = post.tags.join(", ");
                        const published = post.published.split("T");
                        const date = published[0].split("-").reverse().join("/");

                        return(
                            <PostCard href="#" key={post.id} className="keen-slider__slide">
                                <Image src={post.coverImage} width={350} height={250} alt="" />
                                <p>{post.title}</p>
                                <span>{tags}</span>
                                <span>{date}</span>
                            </PostCard>
                        )
                    })
                }
            </section>


            <h1>Posts</h1>
            <PostContainer>
                {
                    posts.length > 0 ?
                    posts.map(post => {

                        const tags = post.tags.join(", ");
                        const published = post.published.split("T");
                        const date = published[0].split("-").reverse().join("/");

                        return(
                            <PostCard href="#" key={post.id}>
                                <Image src={post.coverImage} width={250} height={200} alt="" />
                                <p>{post.title}</p>
                                <span>{tags}</span>
                                <span>{date}</span>
                            </PostCard>
                        )
                    }) :
                    <h1>Carregando..</h1>
                }
            </PostContainer>
        </HomeContainer>
    );
}

export const getServerSideProps:  GetServerSideProps = async () => {
    const res = await fetch("https://news-api.lublot.dev/api/posts?_limit=8&_sort=published&_order=desc");
    const recentPosts = await res.json();
    
    return {
        props: {
            recentPosts,
        }

    };
}
