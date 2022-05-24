import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <div id="post-item">
        <Link to={ post.frontmatter.path }>
            <div class="bg-light p-5 rounded">
                <date className="post-item-date">
                    {post.frontmatter.date }
                </date>
                <h1 className="post-item-title">
                    { post.frontmatter.title }
                </h1>
                <p className="post-item-excerpt">
                    { post.excerpt }
                </p>
            </div>
        </Link>
    </div>
)

export default PostLink