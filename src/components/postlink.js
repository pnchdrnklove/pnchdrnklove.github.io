import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import "../css/postlink.css"

const PostLink = ({ post }) => {
    return <>
    <div id="post-list">
        <Link to={ post.frontmatter.path } className="post-list-wrapper">
            <div className="image-wrapper">
                <GatsbyImage src={post.frontmatter.image} alt={post.frontmatter.category}/>
            </div>
            <div className="text-wrapper">
                <span className="post-list-date">
                    { post.frontmatter.category }
                    { post.frontmatter.date }
                </span>
                <h3 className="post-list-title">
                    { post.frontmatter.title }
                </h3>
                <p className="post-list-excerpt">
                    { post.excerpt }
                </p>
            </div>
        </Link>
    </div></>
}

export default PostLink