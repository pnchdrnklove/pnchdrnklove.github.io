import React from "react"

const Search = ({ searchbar }) => {
  const useSearch = searchbar?.useSearch;
  const { query, setQuery } = useSearch ? searchbar : '';
  return <>
    <div className="post-search" style={{display: useSearch ? 'inline' : 'none'}}>
      <input
        value={query}
        onInput={({target: { value }}) => setQuery(value)}
        type="search"
        id="header-search"
        placeholder="Search blog posts"
        spellCheck="false"
      />
    </div>
    </>
  }

export default Search