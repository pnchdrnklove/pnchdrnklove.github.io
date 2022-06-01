import React, {useState} from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Template({ 
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html } = data.markdownRemark
    const [useSearch, setUseSearch] = useState(false);
    return (
      <Layout contents={
        <>
        <Seo title="Home" />
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <span>{frontmatter.date}</span>
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
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;