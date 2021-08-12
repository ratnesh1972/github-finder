import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

    const githubContext = useContext(GithubContext);

    useEffect(() => {
        githubContext.getUser(match.params.login);
        githubContext.getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [])

    const { login, avatar_url, html_url, name, location, bio, public_repos, public_gists, followers, following, hireable, company, website } = githubContext.user;

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">Go Back To Search</Link> {hireable ? <span><i className="fas fa-check" style={{ color: 'green' }}></i> Hireable</span> : <span><i className="fas fa-times" style={{ color: 'red' }}></i> Hireable</span>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="Avatar" className="round-img" style={{ width: '100px' }} />
                    <h2>{name}</h2>
                    <p>Location : {location}</p>
                </div>
                <div>
                    {bio && <Fragment><h2>Bio </h2><p>{bio}</p></Fragment>}
                    <a className="btn btn-dark my-1" href={html_url} target="_blank" rel="noreferrer">View Profile</a>
                    <ul>
                        {login && <li>Username : {login}</li>}
                        {company && <li>Company : {company}</li>}
                        {website && <li>Website : {website}</li>}
                        {login && <li>Username : {login}</li>}
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="text-center">
                    <span className="badge badge-success">Followers : {followers}</span>
                    <span className="badge badge-danger">Following : {following}</span>
                    <span className="badge badge-warning">Public Repos : {public_repos}</span>
                    <span className="badge badge-dark">Public Gists : {public_gists}</span>
                </div>
            </div>
            <Repos />
        </Fragment>
    )
}


export default User
