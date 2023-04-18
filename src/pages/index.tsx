import { HomeContainer } from "../styles/style_pages/home";
import { PostCard, PostContainer } from "../styles/style_pages/home/post";
import defaultImage from "../assets/default-image.jpg"

import Image from "next/image";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
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

    return (
        <HomeContainer>
            <h1>Posts recentes</h1>
            <PostContainer>
                {
                    recentPosts.map(post => {

                        const tags = post.tags.join(", ")

                        return(
                            <PostCard href="#" key={post.id}>
                                <Image src={post.coverImage} width={250} height={250} alt="" />
                                <p>{post.title}</p>
                                <span>{tags}</span>
                            </PostCard>
                        )
                    })
                }
            </PostContainer>


            <h1>Posts</h1>
            <PostContainer>
                {
                    posts.length > 0 ?
                    posts.map(post => {

                        const tags = post.tags.join(", ")

                        return(
                            <PostCard href="#" key={post.id}>
                                <Image src={post.coverImage} width={250} height={250} alt="" />
                                <p>{post.title}</p>
                                <span>{tags}</span>
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
