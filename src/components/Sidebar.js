import UserBox from "./Lateral/UserBox"
import Sugestions from "./Lateral/Sugestions"
import Links from "./Lateral/Links"
import Copyright from "./Lateral/Copyright"

export default function Sidebar(){
    return(

    <div class="sidebar">
        <UserBox/>
        <Sugestions />
        <Links/>
        <Copyright/>
    </div>
            )}