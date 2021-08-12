import { SEARCH_USERS, GET_USER, CLEAR_SEARCH, GETUSER_REPOS, SET_LOADING } from '../../type';

const GithubContext = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS: return {
            ...state,
            users: action.payload,
            loading: false
        }

        case GET_USER: return {
            ...state,
            user: action.payload,
            loading: false
        }

        case SET_LOADING: return {
            ...state,
            loading: true
        }

        case CLEAR_SEARCH: return {
            ...state,
            users: []
        }
        case GETUSER_REPOS: return {
            ...state,
            repos: action.payload,
            loading: false
        }
        default:
            return state;
    }
}

export default GithubContext;