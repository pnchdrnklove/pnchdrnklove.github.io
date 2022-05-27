module.exports = {
  siteMetadata: {
    title: `pnchdrnklove`,
    description: `records I daily studied`,
    author: {
      name: `Sangchul Jung`,
      nickname: `pnchdrnklove`,
      summary: `who loves beautiful things.`,
    },
    siteUrl: `https://pnchdrnklove.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },      
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+KR\:100,300,400,500,600,700,900`
        ],
        display: `swap`,
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allMarkdownRemark(sort: { fields: [ frontmatter___date], order: DESC }) {
              nodes {
                excerpt
                frontmatter {
                  path
                  date(formatString: "YYYY-MM-DD")
                  title
                }
                rawMarkdownBody
              }
            }
          }
        `,

        ref: 'path',
        index: ['title', 'body'],
        store: ['title', 'excerpt', 'date', 'path'],
        normalizer: ({data}) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            path: node.frontmatter.path,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            excerpt: node.excerpt,
            body: node.rawMarkdownBody,
          })),
        }
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
