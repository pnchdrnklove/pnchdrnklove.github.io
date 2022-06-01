import * as React from "react"
import {useState} from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostLink from "../components/post-list"

import * as styles from "../components/index.module.css"

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
            return (
                excerpt.includes(query)
            )
        }) : nodes;

    return <>
        <Layout searchbar={{ useSearch, setUseSearch, query, setQuery }}
            contents={ posts.map(post => (
                <PostLink key={post.frontmatter.path} post={post} />
            ))}
        >
            <Seo title="Home" />
            <div className={ styles.textCenter }>
                <h1>
                    Welcome to <b>Gatsby!</b>
                </h1>
            </div>        
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