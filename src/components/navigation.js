import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
    const splittedPath = 
          typeof window !== 'undefined' ? 
          window.location.pathname.split('/') : '';
    const result = [];
    for (let i = 1; i < splittedPath.length; i++) {
        if (splittedPath[i]) {
            result.push(<><Link>{splittedPath[i]}</Link><span className="seperator">/</span></>);
        }
    }
    return <>
        <div>{result}</div>
    </>
}

export default Navigation