import React from "react"
import { Link } from "gatsby"
import "../css/navigation.css"

const Navigation = ({ navData }) => {
    const windowPath = 
        typeof window !== 'undefined' ? 
        window.location.pathname.split('/').filter(Boolean) : '';
    
    const categoryPath = () => { if (Array.isArray(windowPath)) {
        return windowPath.map(path => {
            return <>
                <Link to={`${path === 'category' ? `/${path}` : `/category/${path}`}`}
                    key={`/${path}`} className="path">
                    <span>{path}</span>
                </Link>
                <span className="seperator">&gt;</span>
            </>
        })
    }}

    const pathLink = navData ? <>
        <Link to={`/category/${navData.category}`} className="path">
            <span>{navData.category}</span>
        </Link>
        <span className="seperator">&gt;</span>
        <Link to="#" className="path">
            <span>{navData.title}</span>
        </Link>
        </> :
        <>{categoryPath()}</>
    return <div className="navigation">{pathLink}</div>
}

export default Navigation