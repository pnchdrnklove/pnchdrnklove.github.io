import React from "react"
import * as JsSearch from "js-search"
import { useStaticQuery, graphql } from "gatsby"

    
class Search extends React.Component {
  state = {
    postList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
    defaultData: [],
  }

  async getData() {
      useStaticQuery(graphql`
    query PostDataQuery {
      allMarkdownRemark {
        nodes {
          excerpt
          id
          rawMarkdownBody
          frontmatter {
            category
            date
            description
            path
            tag
            title
          }
        }
      }
    }
  `
)
    console.log(DefaultData)

    this.setState({ postList: DefaultData.allMarkdownRemark.nodes.frontmatter })
    this.rebuildIndex()
  }

  
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { postList } = this.state
    const dataToSearch = new JsSearch.Search("title")
    /**
     * defines an indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title")
    dataToSearch.addIndex("title") // sets the index attribute for the data
    dataToSearch.addIndex("excerpt") // sets the index attribute for the data
    dataToSearch.addDocuments(postList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { postList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? postList : searchResults
    return (
        <div className="post-search">
        <ul>
            <li>{queryResults}</li>
        </ul>
          <form onSubmit={this.handleSubmit}>
            <input
                    value={searchQuery}
                    onChange={this.searchData}
                    type="search"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                    spellCheck="false"
            />
          </form>
        </div>
    )
  }
};

export default Search