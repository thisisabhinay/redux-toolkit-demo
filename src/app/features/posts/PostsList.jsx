import React from "react"
import { useSelector } from "react-redux"
import { selectAllPosts } from "./slicePosts"

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body.substring(0,150)}</p>
            </article>
        )
    })

    return (
        <div className="PostsList">
            <h1>All Posts</h1>
            <hr/>
            { renderedPosts }
        </div>
    )
}

export default PostsList