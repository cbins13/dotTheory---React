import Post from "./Post"

const Posts = ({posts}) => {
    let data = posts.map(post=>{
        return(
            <Post post={post} key={post.id}/>
        )
    })
    return(
        <div className="postsContainer">
            {data}
        </div>
    )
}

export default Posts