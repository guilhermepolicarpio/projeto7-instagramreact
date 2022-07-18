import React from "react";

export default function Post(props){

    const{source, user,content,likeName,likeImage, likeCount} = props;

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

  <div class="conteudo">
    <img src={content} />
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
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