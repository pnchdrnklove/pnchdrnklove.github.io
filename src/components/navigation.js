import React from 'react'

const Navigation = () => {
    const splittedPath = 
          typeof window !== 'undefined' ? 
          window.location.pathname.split('/') : '';
    const result = [];
    for (let i = 1; i < splittedPath.length; i++) {
        if (splittedPath[i]) {
            if (i === splittedPath.length - 1) {
                // result.push(<><Link className="navi-post-title">{splittedPath[i]}</Link><span className="seperator">/</span></>);
                result.push(<><span className="navi-post-title" key={splittedPath[i]}>{splittedPath[i]}</span><span className="seperator">/</span></>);
            } else {
                // result.push(<><Link>{splittedPath[i]}</Link><span className="seperator">/</span></>);
                result.push(<><span key={splittedPath[i]}>{splittedPath[i]}</span><span className="seperator">/</span></>);
            }        
        }
    }
    return <>
        <div className="navigation">{result}</div>
    </>
}

export default Navigation