import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const PostLink = ({ post }) => (
    <div id="post-list" className="bg-light p-45 rounded-3">
        <Link to={ post.frontmatter.path }>
            <div className="post-list-wrapper">
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
                <StaticImage className="post-list-img" 
                    src={"../images/example.png"}
                    placeholder="blurred"
                    width={80}
                    height={80}
                    objectFit="contain" />
            </div>
        </Link>
    </div>
)

export default PostLink