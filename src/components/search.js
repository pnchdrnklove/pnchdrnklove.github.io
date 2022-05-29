import React from "react"
import Axios from "axios"

import * as JsSearch from "js-search"

    
class Search extends React.Component {
  state = {
    postList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  // async componentDidMount() {
  //   Axios.get("https://bvaughn.github.io/js-search/books.json")
  //     .then(result => {
  //       const postData = result.data
  //       this.setState({ postList: postData.books })
  //       console.log('post data:', postData, 'state:', this.state)
  //       this.rebuildIndex()
  //     })
  //     .catch(err => {
  //       this.setState({ isError: true })
  //       console.log("====================================")
  //       console.log(`Something bad happened while fetching the data\n${err}`)
  //       console.log("====================================")
  //     })
  // }

  async componentDidMount() {
    // const postData = this.props.searchbar.data_for_search
    const postData = [{'id': '설명', 'title': 'hi', 'metadata': {'desc': '설명', 'date': '2012'}},
                      {'id': '345', 'title': 'elephant', 'metadata': {'desc': 'description', 'date': '2013'}}]
    this.setState({ postList: postData })
    this.rebuildIndex()
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { postList } = this.state
    const dataToSearch = new JsSearch.Search("id")
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
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")
    // dataToSearch.addIndex("title") // sets the index attribute for the data
    dataToSearch.addIndex("id") // sets the index attribute for the data
    // dataToSearch.addDocuments(postList) // adds the data to be searched
    dataToSearch.addDocuments([{'id': '설명', 'title': 'hi', 'metadata': {'desc': '설명', 'date': '2012'}}, {'id': '345'}])
    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  // searchData = () => {
  //   console.log(`in search.js -> searchData : ${this.props.searchbar.searchQuery}`)
  //   const searchQuery = this.props.searchbar.searchQuery
  //   const { search } = this.state
  //   const queryResult = search.search(searchQuery.target.value)
  //   this.setState({ searchQuery: searchQuery.target.value, searchResults: queryResult })
  // }
  searchData = e => {
    const { search } = this.state
    console.log(search)
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
    }
  render() {
    const { postList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? postList : searchResults
    console.log('search Results:', queryResults, 'postList:', postList, 'search Query:', searchQuery, 'search results:', searchResults)
    return (
        <div className="post-search">
        <p>
          results: {queryResults.map(item => {
            return (<p key={`${item.id}`}>{item.id}</p>)
          })}
        </p>
            <input
                    value={searchQuery}
                    onInput={this.searchData}
                    type="search"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                    spellCheck="false"
            />
        </div>
    )
  }
}

export default Search