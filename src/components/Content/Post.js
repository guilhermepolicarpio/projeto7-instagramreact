import React from "react";

export default function Post(props){

    const [liked, setLiked] = React.useState("hidden");
    const{source, user,content,likeName,likeImage, likeCount} = props;


    let IonIconClass = "";
    if(liked === "red"){
        IonIconClass = "hidden";
   }
   
   function likePost(){
       if(liked === "red"){
           setLiked("hidden");
           IonIconClass = "";
       }else{
            setLiked("red");
            IonIconClass = "hidden"
       }
   }

    return(
<div class="posts">
<div class="post">
  <div class="topo">
    <div class="usuario">
      <img src={source} />
      {user}
    </div>
    <div class="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div class="conteudo" onClick={() => setLiked("red")}>
    <img src={content} />
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
      <ion-icon class={IonIconClass + " md hydrated"} onClick={likePost} name="heart-outline"></ion-icon>
      <ion-icon class={liked + " md hydrated"} onClick={likePost} name="heart"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div class="curtidas">
      <img src={likeImage} />
      <div class="texto">
        Curtido por <strong>{likeName}</strong> e <strong>outras {likeCount}pessoas</strong>
      </div>
    </div>
  </div>
</div>

</div>
    );
}