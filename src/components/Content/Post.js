import React from "react";

export default function Post(props){

    const{source, user,content,likeName,likeImage, likeCount} = props;

    return(
<div class="barra-post">
            <div class="topo-post">
                <div>
                    <img src={source} alt=""/>
                     <p>{user}</p>
                </div>
                <div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div> 

            </div>

                <div>
                     <img src={content} alt=""/>
                </div>

            <div class ="inferior-post">
            <div class="rodape-post">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="like">
                <img src={likeImage} alt=""/>
                <p> Curtido por <strong>{likeName}</strong> e <strong>outras {likeCount}</strong></p>
            </div>
            </div>
        </div>
   

    );
}