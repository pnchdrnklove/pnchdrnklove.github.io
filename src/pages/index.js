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
    const [viewPost, setViewPost] = useState('all');
    
    const posts = query ? nodes
        .filter(post => {
            const {excerpt} = post;
            const {title, category} = post.frontmatter;
            return (
                [title, category, excerpt].map(item => item.match(new RegExp(query, "i")) !== null ? true : false).includes(true)
            )
        }) : nodes;
    const postProp = posts.map(post => <PostLink key={post.frontmatter.path} post={post} />)

    return <>
        <Layout searchbar={{ useSearch, setUseSearch, query, setQuery }}
                about={<About/>}
                contents={postProp}
        />
    </>
};
export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
            nodes {
                id
                excerpt(truncate: true, pruneLength: 120)
                frontmatter {
                    category
                    date(formatString: "YYYY-MM-DD")
                    path
                    title
                }
                rawMarkdownBody
            }
        }
    }
`