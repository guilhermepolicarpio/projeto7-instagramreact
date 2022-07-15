import Posts from "./Content/Posts";
import Stories from "./Stories";
import LateralBox from "./LateralBox";

export default function Conteudo(){
    return(        
    
        <div class="conteúdo-pagina">
            <Stories />
             <Posts/>
             <LateralBox/>
        </div>

    );
}