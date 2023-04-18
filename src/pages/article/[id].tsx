import { useRouter } from "next/router";
import defaultImage from "../../assets/default-image.jpg"

import Image from "next/image";
import { ArticleContainer } from "../../styles/style_pages/article";
import { CommentContainer } from "../../styles/style_pages/article/comments";

export default function Post() {
    const { query } = useRouter();

    return (
        <ArticleContainer>
           <section>
               <aside>
                   <Image src={defaultImage} alt="" width={300} />
                   <div>
                       <p>tag1, tag2, tag3</p>
                       <p>Autor: alexandre fer</p>
                       <p>Atualizado em: 17/04/2023</p>
                   </div>
               </aside>
               <h1>
                post {JSON.stringify(query)} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod felis vel justo egestas luctus. Fusce ac ligula vel libero condimentum pretium vitae non turpis. Phasellus elementum egestas malesuada. Pellentesque dictum gravida lorem nec elementum. Quisque augue metus, blandit vel tempus in, sodales sit amet sapien. Ut non auctor ipsum. Etiam enim metus, bibendum in sem eget, hendrerit ullamcorper quam. Pellentesque luctus nunc vitae elit suscipit, laoreet pulvinar tortor placerat. Aliquam consequat nibh in magna dapibus, nec molestie diam finibus. Ut accumsan sodales nunc, congue aliquet nisi vestibulum quis.
               
               Nulla scelerisque diam sed dui tempor gravida. Curabitur eu elementum sapien. Integer neque velit, mollis in tincidunt eget, dapibus in magna. Curabitur et interdum quam. Nunc eget elit nulla. Duis at fermentum odio. Praesent elementum augue quis efficitur laoreet.
               
               Phasellus velit diam, vehicula a pharetra ut, fringilla elementum sapien. Integer ultricies dapibus neque sit amet accumsan. Duis porta diam ac urna luctus, sit amet pharetra sapien venenatis. Etiam vulputate eget lectus et dapibus. Aenean non ex in leo hendrerit feugiat id et libero. Proin feugiat, massa vitae congue bibendum, sapien odio vulputate ligula, sed aliquet diam ante id magna. Aliquam ultricies vitae mi dapibus faucibus. Praesent vitae lobortis diam. Suspendisse vitae vehicula velit, et gravida mi. Duis laoreet porta dolor, nec auctor est vehicula eu. Integer ac quam et nunc molestie aliquam. Ut velit ex, commodo at nulla et, congue dictum velit. Praesent vitae consectetur leo. Sed volutpat molestie dapibus. Proin eget efficitur lorem. Phasellus dapibus lacus eu nisl dignissim, scelerisque porttitor lectus cursus.
               
               Aenean suscipit erat neque, sed cursus risus egestas non. Quisque quis vestibulum nibh, a congue arcu. Suspendisse non ornare turpis, nec consectetur nisi. Vestibulum efficitur nulla sed nisl viverra tempor. Nunc aliquet nibh lectus, ut eleifend urna rutrum id. Fusce quis arcu eget lectus luctus mattis sed quis augue. Curabitur in sapien suscipit, tristique libero ut, ultrices purus. Vivamus in orci id libero laoreet egestas. Nunc fringilla porta neque eu scelerisque. Maecenas et dapibus arcu. Duis in rutrum augue. Phasellus pulvinar ac quam non ornare. Nunc ut euismod nunc, ullamcorper faucibus leo. Praesent consectetur, urna in faucibus laoreet, leo sem viverra sapien, sed commodo enim leo vel ex. Suspendisse at ipsum in elit eleifend varius eu at eros. Donec non diam porta, laoreet eros ac, varius nulla.
               
               Cras nec est mi. Vivamus id elit sollicitudin, congue tellus eget, pulvinar felis. Fusce bibendum nisl id lacus aliquam, eget sodales quam vehicula. Nulla facilisi. Nullam luctus ut tellus in dapibus. In eget risus rhoncus eros imperdiet tempor. Donec id lorem id lacus mollis tempus.
               
               Etiam nisl turpis, pretium sed odio vestibulum, molestie egestas metus. Donec vitae fermentum metus, eget efficitur metus. Nam elit metus, pulvinar sed ipsum ut, gravida luctus justo. Sed nec elit urna. Suspendisse a sagittis enim, at cursus nisi. Maecenas feugiat eget ex eu congue. Sed dapibus arcu in malesuada semper. Quisque sollicitudin mauris et tellus elementum, sed interdum eros vulputate. Phasellus suscipit semper ex ac varius. Nam vulputate enim vel tellus tempor malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin dui ex, cursus quis lectus eget, tempus consectetur eros. Aliquam fermentum porta rutrum. Pellentesque vitae orci et dolor feugiat rutrum eget nec eros. In porttitor tincidunt lorem id eleifend.
               
               Aenean in turpis bibendum, pretium ex quis, finibus odio. Nulla eleifend dictum ex, at viverra sapien luctus a. Nulla sem libero, consectetur egestas massa vitae, pharetra semper enim. Etiam sollicitudin magna eget augue congue finibus eu vel ex. Nam finibus, erat eget volutpat tristique, metus felis ultricies nulla, et euismod odio libero ut ante. Etiam tristique pulvinar nibh, nec posuere dui tempus et. Integer vestibulum, dui quis tincidunt scelerisque, nibh lectus congue dolor, sed cursus leo ipsum volutpat libero. Donec consectetur eu tellus non hendrerit. Etiam quis nibh non velit sagittis dapibus. Pellentesque mollis eu nisl non luctus. Duis sit amet ullamcorper leo.
               
               Sed dapibus metus sit amet tempus faucibus. Praesent quis dui feugiat, pellentesque ante vitae, suscipit purus. Quisque finibus aliquam felis, nec sodales mauris pulvinar ut. Quisque dignissim mattis vestibulum. Etiam a purus varius, tincidunt mauris non, ornare libero. In vel mi vitae ante euismod ultricies. Sed elementum vitae ex vitae eleifend.
               
               Nam quis nunc quis nisi pretium finibus sed quis ex. Quisque ac neque id nisl vestibulum euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ut accumsan leo. In hac habitasse platea dictumst. Duis vehicula dui ligula, non feugiat nunc posuere ultrices. Sed a risus eget nulla mollis sagittis. Nulla facilisi. Integer maximus odio porta massa lobortis, vel luctus sem facilisis. Vivamus non lectus est. Aenean et elementum tellus. Proin mauris elit, bibendum ac justo eget, aliquet pulvinar lorem.
               
               Aliquam rhoncus ligula sit amet posuere varius. Integer a ultrices augue, tempus maximus enim. Aenean mattis ligula nisl, pulvinar hendrerit enim tristique at. Sed ullamcorper ac purus sed ultricies. Praesent auctor pellentesque diam rhoncus iaculis. Aenean nec elit et tellus porta vulputate vitae vitae nibh. Nunc quis erat finibus purus consectetur ultrices. In mattis libero dui, sed pharetra dui ultricies vel. Sed diam nisi, consectetur quis consectetur quis, porttitor ut nunc. Quisque suscipit eu dui in posuere. Proin tristique libero eu nisi pellentesque, eu ullamcorper ante condimentum. Sed varius nibh vitae vestibulum euismod. Ut placerat aliquam est ut ultricies.
               </h1>
               
           </section>
           <CommentContainer>
                <p>comentario</p>
                <p>comentario</p>
                <p>comentario</p>
           </CommentContainer>
        </ArticleContainer>
        
    );
}
