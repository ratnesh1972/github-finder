import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import Clear from './Clear';

function Search({ showAlert }) {

    //Use context to call action and make changes in state.
    const githubContext = useContext(GithubContext);

    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.showAlert('Please enter something!', 'light');
        }
        else {
            githubContext.searchUsers(text);
            setText('');
        }

    }

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmitHandler}>
                <input type="text" name="text" placeholder="Enter username" onChange={onChangeHandler} value={text} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && <Clear />}
        </div>
    )

}

Search.propTypes = {
    showAlert: PropTypes.func.isRequired
}

export default Search
