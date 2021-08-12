import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={style} />
        </Fragment>
    )
}

const style = {
    display: 'block',
    width: '60px',
    margin: 'auto'
}

export default Spinner;