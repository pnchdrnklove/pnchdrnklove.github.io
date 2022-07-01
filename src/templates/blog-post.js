import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Toc from "../components/toc"
import "../css/blog-post.css"

export default function Template({ 
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { frontmatter, html, tableOfContents } = data.markdownRemark;
    const { title, category, date } = frontmatter;
    return (
      <Layout contents={
        <>
        <Seo title={title} />
        <main>
            <div className="blog-post-container">
              <div className="blog-post">
                <span>{category}&nbsp;&middot;&nbsp;{date}</span>
                <h1>{title}</h1>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              <Toc list={tableOfContents} />
            </div>
            <div className="other-posts">
            </div>
        </main>
        </>
      }
      navData={{ title, category }}
      >
      </Layout>

    );
  };

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      tableOfContents
      frontmatter {
        category
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;