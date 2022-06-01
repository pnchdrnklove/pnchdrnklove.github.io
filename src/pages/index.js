import * as React from "react"
import {useState} from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostLink from "../components/post-list"

import * as styles from "../components/index.module.css"
import profile from "../images/profile.PNG"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const IndexPage = ({
    data: {
        allMarkdownRemark: {
            nodes
        }
    },
}) => {
    const [query, setQuery] = useState('');
    const [useSearch, setUseSearch] = useState(true);
    const posts = query ? nodes
        .filter(post => {
            const {excerpt} = post;
            const {title} = post.frontmatter;
            return (
                excerpt.includes(query) || title.includes(query)
            )
        }) : nodes;

    return <>
        <Layout searchbar={{ useSearch, setUseSearch, query, setQuery }}
                about={
                    <><Seo title="Home" />
                    <div className="about-wrapper" style={{backgroundColor: "#999"}}>
                        <h1>Welcome to <b>Gatsby!</b></h1>
                        <div className="image-wrap">
                            <img src={profile} alt=""/>
                        </div>
                    </div>
                    </>
                }
                contents={posts.map(post => 
                <PostLink key={post.frontmatter.path} post={post} />
                )}

            >
        </Layout>
    </>
};
export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
            nodes {
                id
                excerpt(truncate: true, pruneLength: 100)
                frontmatter {
                    date(formatString: "YYYY-MM-DD")
                    path
                    title
                }
                rawMarkdownBody
            }
        }
    }
`