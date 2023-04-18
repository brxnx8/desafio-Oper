import { useRouter } from "next/router";
import defaultImage from "../../assets/default-image.jpg"

import Image from "next/image";
import { ArticleContainer } from "../../styles/style_pages/article";

export default function Post() {
    const { query } = useRouter();

    return (
        <ArticleContainer>
           <Image src={defaultImage} alt="" width={300} /> 
           <h1>post {JSON.stringify(query)}</h1>
           <div>
               <p>tag1, tag2, tag3</p>
               <p>Autor: alexandre fer</p>
               <p>Atualizado em: 17/04/2023</p>
           </div>
        </ArticleContainer>
        
    );
}
