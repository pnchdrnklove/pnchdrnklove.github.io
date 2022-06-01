import React, {useRef} from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
    if (typeof window !== 'undefined') {
        const windowRef = useRef(window)
        const splittedPath = window.location.pathname.split('/');
        const result = [];
        for (let i = 1; i < splittedPath.length; i++) {
            if (splittedPath[i]) {
                result.push(<><Link>{splittedPath[i]}</Link><span className="seperator">/</span></>);
            }
        }
    }
    return <>
        <div className="path-navi">{result}</div>
    </>
}

export default Navigation