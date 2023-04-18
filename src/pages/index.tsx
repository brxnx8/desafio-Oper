import { HomeContainer } from "../styles/style_pages/home";
import { PostCard, PostContainer } from "../styles/style_pages/home/post";
import defaultImage from "../assets/default-image.jpg"

import Image from "next/image";

export default function Home() {
    return (
        <HomeContainer>
            <h1>Posts</h1>
            <PostContainer>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
                <PostCard href="#">
                    <Image src={defaultImage} width={250} alt="" />
                    <p>este e um exemplo de um post</p>
                    <span>tag1, tag2, tag3</span>
                </PostCard>
            </PostContainer>
        </HomeContainer>
    );
}
