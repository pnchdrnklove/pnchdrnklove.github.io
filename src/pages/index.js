import * as React from "react"
import { graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

import Layout from "../components/layout"
import Seo from "../components/seo"

import PostLink from "../components/post-list"
import SearchBar from "../components/search"

import * as styles from "../components/index.module.css"


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({
    data: {
        allMarkdownRemark: { nodes },
        localSearchPages: { index, store },
    },
}) => {
    const { search } = typeof window !== 'undefined' && window.location;
    const getSearch = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = React.useState(getSearch || '');

    // const posts = nodes
    //     .filter(node => !!node.frontmatter.date) // you can filter your posts based on some criteria
    //     .map(node => <PostLink key={node.id} post={node} />)

    const results = useFlexSearch(searchQuery, index, store);
    const unFlattenResults = results =>
        results.map(post => {
            const { date, path, excerpt, title, rawMarkdownBody } = post;
            return { excerpt, rawMarkdownBody, frontmatter: { title, date, path }};
        });
    
    const posts = searchQuery ? unFlattenResults(results) : nodes;
    console.log(posts)

    let onload = typeof window !== 'undefined' && window.onload;
    onload = function () {
        document.getElementByID("header-search").innerHTML = "";
    };
        
    return <Layout searchbar={
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}>
                </SearchBar>}
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
        localSearchPages {
            index
            store
        }
    }
`