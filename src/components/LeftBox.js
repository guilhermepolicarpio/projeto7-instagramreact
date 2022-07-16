import Posts from "./Content/Posts";
import Stories from "./Stories";


export default function LeftBox (){
    return(        
    
        <div class="esquerda">
            <Stories/>
             <Posts/>
        </div>

    );
}