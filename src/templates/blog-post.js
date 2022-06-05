import React, {useState} from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../css/blog-post.css"

export default function Template({ 
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html } = data.markdownRemark;
    const [useSearch, setUseSearch] = useState(false);
    return (
      <Layout contents={
        <>
        <Seo title={frontmatter.title} />
        <div className="blog-post-container">
          <div className="blog-post">
            <span>{frontmatter.date}</span>
            <h1>{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </>
      }
      searchbar={{useSearch, setUseSearch}}
      >
      </Layout>

    );
  };

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        category
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;