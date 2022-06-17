import React from "react"

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import PostLink from "../components/postlink"

// import * as styles from "../css/index.module.css"
import "../css/index.css"
import "../css/about.css"

const IndexPage = ({
    data: {
        allMarkdownRemark: {
            nodes
        }
    },
}) => {
    const [query, setQuery] = React.useState('');
    const [useSearch, setUseSearch] = React.useState(true);
    
    const posts = query ? nodes.filter(post => {
        const {excerpt} = post;
        const {title, category} = post.frontmatter;
        return (
            [title, category, excerpt].map(item => 
                item.match(new RegExp(query, "i")) !== null ? true : false).includes(true)
        )
    }) : nodes;
    const postProp = posts.map(post => 
        <PostLink key={post.frontmatter.path} post={post} />)
    return <Layout searchbar={{ useSearch, setUseSearch, query, setQuery }}
                contents={
                    <main>
                        <About />
                        <div className="toggle-box">
                            <Link to="/" className="current-view">All</Link>
                            <Link to="/category">Category</Link>
                        </div>
                        {postProp}
                    </main>
                }
            />
};
export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
            nodes {
                excerpt(truncate: true, pruneLength: 120)
                frontmatter {
                    category
                    date(formatString: "YYYY-MM-DD")
                    path
                    title
                }
            }
        }
    }
`