import React from "react"
import { Link } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/example.png"

const PostLink = ({ post }) => (
    <div id="post-list" className="bg-light p-45 rounded-3">
        <Link to={ post.frontmatter.path }>
            <div>
                <date className="post-list-excerpt post-list-date">
                    {post.frontmatter.date }
                </date>
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
            {/* <StaticImage
                src="../images/example.png"
                loading="eager"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
            /> */}
        </Link>
    </div>
)

export default PostLink