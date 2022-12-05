const Post = ({post}) => {
    return(
        <div className="post">
            <h3 className="postTitle">{post.title}</h3>
            <span className="postAuthor">Author: {post.userId}</span>
            <p className="postBody">{post.body}</p>
        </div>
    )
}

export default Post;