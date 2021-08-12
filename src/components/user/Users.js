import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {

    const githubContext = useContext(GithubContext);

    if (githubContext.loading) {
        return <Spinner />
    } else {
        return (
            <div style={styles}>
                {githubContext.users.map((user) => {
                    return <UserItem key={user.id} user={user} />
                })}
            </div>
        );
    }
}

const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
