import React from 'react'

const Navigation = () => {
    const splittedPath = 
          typeof window !== 'undefined' ? 
          window.location.pathname.split('/').filter(Boolean) : '';
    const pathLink = splittedPath.map((e, i) => {
        return <React.Fragment key={'path-link-'+i}>
            <a href="#" className="path"><span>{e}</span></a>
            { i === splittedPath.length - 1 ? '' : <span className="seperator">/</span> }
        </React.Fragment>
    })
    return <>
        <div className="navigation">{pathLink}</div>
    </>
}

export default Navigation