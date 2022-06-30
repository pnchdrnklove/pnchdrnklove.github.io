import * as React from "react"
import "../css/toc.css"

const Toc = ({ list }) => {
    return <>
    <div className="tocList">
        <div 
            className="tocContents"
            dangerouslySetInnerHTML={{ __html: list}}
        />
    </div>
    
    </>
};

export default Toc