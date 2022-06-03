import * as React from "react"
import {useState} from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/post-list"
import About from "../components/about"

import * as styles from "../css/index.module.css"
import "../css/about.css"

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
            const {title} = post.frontmatter;
            return (
                title.includes(query)
            )
        }) : nodes;     
    return <>
        <Layout searchbar={{ useSearch, setUseSearch, query, setQuery }}
                about={<About/>}
                contents={posts.map(post => 
                    <PostLink key={post.frontmatter.path} post={post} />
                )}
        />
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