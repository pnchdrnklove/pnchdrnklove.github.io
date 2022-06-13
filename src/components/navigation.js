import React from 'react'
import "../css/navigation.css"

const Navigation = ({ postData }) => {
    // const splittedPath = 
    //       typeof window !== 'undefined' ? 
    //       window.location.pathname.split('/').filter(Boolean) : '';
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
    const pathLink = postData ? <>
        <a href="#" className="path"><span>{postData.category}</span></a>
        <span className="seperator">&gt;</span>
        <a href="#" className="path"><span>{postData.title}</span></a>
    </> : ''
    return <>
        <div className="navigation">{pathLink}</div>
    </>
}

export default Navigation