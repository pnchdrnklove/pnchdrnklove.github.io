import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../css/postlink.css"

const PostLink = ({ post }) => {
    const postImage = `../images/${post.frontmatter.category}-icon.png`
    console.log(postImage)
    return <>
    <div id="post-list">
        <Link to={ post.frontmatter.path } className="post-list-wrapper">
            <div className="image-wrapper">
                <StaticImage
                    src={postImage}
                    alt={``}
                    width={80}
                    placeholder="blurred"
                    objectFit="contain"
                    />
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