import React from "react"

const Search = ({ searchbar }) => {
  const useSearch = searchbar? searchbar.useSearch : false;
  const query = useSearch ? searchbar.query : '';
  const setQuery = useSearch ? searchbar.setQuery : '';
  return <>
    <div className="post-search" style={{display: useSearch ? 'inline' : 'none'}}>
      <input
        value={query}
        onInput={({target: { value }}) => setQuery(value)}
        type="search"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
        spellCheck="false"
      />
    </div>
    </>
  }

export default Search