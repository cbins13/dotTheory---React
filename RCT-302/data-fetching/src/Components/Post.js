const Post = ({post}) => {
    return(
        <div className="post">
            <h2 className="postTitle">Title: {post.title}</h2>
            <span className="postAuthor">Author: {post.userId}</span>
            <p className="postBody">{post.body}</p>
        </div>
    )
}

export default Post;