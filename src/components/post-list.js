import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../css/post-list.css"

const PostLink = ({ post }) => (
    <div id="post-list">
        <Link to={ post.frontmatter.path } className="post-list-wrapper">
            <div className="image-wrapper">
                <StaticImage
                    src={"../images/gatsby-icon.png"}
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
    </div>
)

export default PostLink