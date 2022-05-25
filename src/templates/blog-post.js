import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Template({ 
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html } = data.markdownRemark
    return (
      <Layout>
        <Seo title="Home" />
        <div class="blog-post-container">
            <div class="blog-post">
                <h1>{frontmatter.title}</h1>
                <date>{frontmatter.date}</date>
                <div
                    class="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
      </Layout>
        
    );
}

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