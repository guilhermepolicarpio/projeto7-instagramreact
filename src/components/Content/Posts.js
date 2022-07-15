import Post from "./Post"

export default function Posts(){

     const posts=[
        {source:"", user:"gui",content:"",likeName:"",likeImage:"", likeCount:""},
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