import React, { useReducer } from 'react';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import axios from 'axios';
import { SEARCH_USERS, GET_USER, CLEAR_SEARCH, GETUSER_REPOS, SET_LOADING } from '../../type';

const GitHubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    let githubFinderClientId;
    let githubFinderClientSecret;

    if (process.env.NODE_ENV !== 'production') {
        githubFinderClientId = process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID;
        githubFinderClientSecret = process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET;
    } else {
        githubFinderClientId = process.env.GITHUB_FINDER_CLIENT_ID;
        githubFinderClientSecret = process.env.GITHUB_FINDER_CLIENT_SECRET;
    }

    //Define reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Actions

    //Search Users
    const searchUsers = async (username) => {

        //Set loader to true
        setLoading();

        //Create queryString
        const queryString = `?q=${username}`;

        //Get users with username
        const res = await axios.get(`https://api.github.com/search/users${queryString}&client_id=${githubFinderClientId}&client_secret=${githubFinderClientSecret}`);

        //change state
        dispatch({ type: SEARCH_USERS, payload: res.data.items });
    }

    //Get User
    const getUser = async (username) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubFinderClientId}&client_secret=${githubFinderClientSecret}`);

        dispatch({ type: GET_USER, payload: res.data });
    }

    //Get Repos
    const getUserRepos = async (username) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubFinderClientId}&client_secret=${githubFinderClientSecret}`);

        dispatch({ type: GETUSER_REPOS, payload: res.data });
    }

    //Set Loading
    const setLoading = () => { dispatch({ type: SET_LOADING }); }

    //Clear Search
    const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearSearch,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GitHubState;