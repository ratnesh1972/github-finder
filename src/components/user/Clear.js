import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

const Clear = () => {
    const githubContext = useContext(GithubContext);

    return (
        <button className="btn btn-warning btn-block" onClick={githubContext.clearSearch}>Clear Search</button>
    )
}

export default Clear
