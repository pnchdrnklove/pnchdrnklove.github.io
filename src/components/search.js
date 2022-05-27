import React from "react"

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    // <form
    //     action="/"
    //     method="get"
    //     autoComplete="off"
    // >
        
        <div className="post-search">
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="search"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
                spellCheck="false"
            />
        </div>
    // </form>
)

export default SearchBar