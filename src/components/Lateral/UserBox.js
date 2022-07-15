import React from "react";
export default function UserBox(props){
    return(
    <div class="lateral-box">
                <img src={"assets/img" + props.username +".jpg"}/>
                <div>
                    <p>{props.username}</p> 
                    <p>{props.name}</p>
                </div>
    </div>
    )
}