import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Template({ data }) {
    const { frontmatter, html } = data.markdownRemark;
    return (
      <Layout>
        <Seo title="Home" />
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
      </Layout>
        
    );
}

export const pageQuery = graphql`
  query blogPostBySlug($path: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;