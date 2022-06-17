import React from "react"
import { Link } from "gatsby"
import "../css/navigation.css"

const Navigation = ({ navData }) => {
    const splittedPath = 
          typeof window !== 'undefined' ? 
          window.location.pathname.split('/').filter(Boolean) : '';
    // delete splittedPath[0];
    // const pathLink = splittedPath.map((e, i) => {
    //     return <React.Fragment key={'path-link-' + i}>
           
    //         { i === splittedPath.length - 1 ? 
    //             <a href="#" className="path"><span>{postData.title}</span></a> : 
    //             <> 
    //                 <a href="#" className="path"><span>{e}</span></a>
    //                 <span className="seperator">&gt;</span>
    //             </> }
    //     </React.Fragment>
    // })
    const pathLink = navData ? <>
        <Link to={`/category/${navData.category}`} className="path">
            <span>{navData.category}</span>
        </Link>
        <span className="seperator">&gt;</span>
        <Link to="#" className="path">
            <span>{navData.title}</span>
        </Link>
        </> :
        <>{splittedPath.map(path => 
            <><Link to={`/${path}`} key={`/${path}`} className="path">
                <span>{path}</span>
              </Link>
              <span className="seperator">&gt;</span>
            </>
        )}
        </>
    return <div className="navigation">{pathLink}</div>
}

export default Navigation