import React from "react"
import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../css/postlink.css"

const PostLink = ({ post }) => {
    const image = getImage(post.frontmatter.thumbnailImage)
    return <>
    <div id="post-list">
        <Link to={ post.frontmatter.path } className="post-list-wrapper">
            <div className="image-wrapper">
                <GatsbyImage image={image} alt={post.frontmatter.category}/>
            </div>
            <div className="text-wrapper">
                <span className="post-list-date">
                    { post.frontmatter.category } &middot;
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