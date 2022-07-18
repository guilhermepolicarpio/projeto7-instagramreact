export default function UserBox(){

    const users=[
        {source: "assets/img/catanacomics.svg", username: "catanacomics", user:"Catana"}
    ];

    return(
<>
        {users.map(props => (
        <div class="usuario">
            <img src={props.source} />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.user}
            </div>
       </div>
      
    ))}
    </>
    )
}