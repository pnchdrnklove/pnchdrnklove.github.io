import React from "react"
import { Link } from "gatsby"
import logo from "../images/example.png"

const PostLink = ({ post }) => (
    <div id="post-list" className="bg-light p-45 rounded-3">
        <Link to={ post.frontmatter.path }>
            <div>
                <span className="post-list-excerpt post-list-date">
                    {post.frontmatter.date }
                </span>
                <h3 className="post-list-title">
                    { post.frontmatter.title }
                </h3>
                <p className="post-list-excerpt">
                    { post.excerpt }
                </p>
            </div>
            <div className="image-wrap">
                <img src={logo} alt=""/>
            </div>
        </Link>
    </div>
)

export default PostLink