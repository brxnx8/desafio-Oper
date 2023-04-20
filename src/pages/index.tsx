import { HomeContainer, PostRecentContainer } from "../styles/style_pages/home";
import {
    Pagination,
    PostCard,
    PostContainer,
} from "../styles/style_pages/home/post";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "https://news-api.lublot.dev/api/posts",
});

export interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    published: string;
    coverImage: string;
    tags: string[];
}
interface HomeProps {
    recentPosts: Post[];
}

export default function Home({ recentPosts }: HomeProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    function nextPage() {
        setCurrentPage((state) => {
            if (state < 50) {
                return state + 1;
            } else {
                return state;
            }
        });
    }

    function prevPage() {
        setCurrentPage((state) => {
            if (state > 1) {
                return state - 1;
            } else {
                return state;
            }
        });
    }

    useEffect(() => {
        const apiData = async () => {
            try {
                const res = await api.get(
                    `?_page=${currentPage}&_limit=20&_sort=title&_order=desc`
                );
                setPosts(res.data);
            } catch (error) {
                window.alert(error);
            }
        };
        apiData();
    }, [currentPage]);

    const [refSlider] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 20,
        },
    });

    return (
        <HomeContainer>
            <h1>Posts recentes</h1>
            <PostRecentContainer ref={refSlider} className="keen-slider">
                {recentPosts.map((post) => {
                    const tags = post.tags.join(", ");
                    const published = post.published.split("T");
                    const date = published[0].split("-").reverse().join("/");

                    return (
                        <Link
                            href={`/article/${post.id}`}
                            key={post.id}
                            className="keen-slider__slide"
                            prefetch={false}
                        >
                            <PostCard>
                                <Image
                                    src={post.coverImage}
                                    width={350}
                                    height={250}
                                    alt=""
                                />
                                <p>{post.title}</p>
                                <span>{tags}</span>
                                <span>{date}</span>
                            </PostCard>
                        </Link>
                    );
                })}
            </PostRecentContainer>

            <h1>Principais Posts</h1>
            <PostContainer>
                {posts.length > 0 ? (
                    posts.map((post) => {
                        const tags = post.tags.join(", ");
                        const published = post.published.split("T");
                        const date = published[0]
                            .split("-")
                            .reverse()
                            .join("/");

                        return (
                            <Link
                                href={`/article/${post.id}`}
                                key={post.id}
                                prefetch={false}
                            >
                                <PostCard>
                                    <Image
                                        src={post.coverImage}
                                        width={350}
                                        height={200}
                                        alt=""
                                    />
                                    <p>{post.title}</p>
                                    <span>{tags}</span>
                                    <span>{date}</span>
                                </PostCard>
                            </Link>
                        );
                    })
                ) : (
                    <h1>Carregando..</h1>
                )}
            </PostContainer>
            <Pagination>
                <div onClick={prevPage}>Ant</div>
                <div onClick={nextPage}>Prox</div>
            </Pagination>
        </HomeContainer>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await api.get("?_limit=8&_sort=published&_order=desc");
    const recentPosts = res.data;

    if (!res) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            recentPosts,
        },
        revalidate: 3600,
    };
};
