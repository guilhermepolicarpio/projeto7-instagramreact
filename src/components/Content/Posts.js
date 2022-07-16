import Post from "./Post"

export default function Posts(){

     const posts=[
        {source:"assets/img/meowed.svg", user:"meowed",content:"assets/img/gato-telefone.svg",likeName:"respondeai",likeImage:"assets/img/respondeai.svg", likeCount:"101.523"},
        {source:"", user:"",content:"",likeName:"",likeImage:"", likeCount:""}
    ]
return(
    <>
    {posts.map(data =>
        <Post source = {data.source}  
              user = {data.user} 
              content = {data.content}
            likeName={data.likeName}
            likeImage={data.likeImage}
            likeCount={data.likeCount} />)}
    </>
)}