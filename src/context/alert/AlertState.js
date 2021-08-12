import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT } from '../../type';

const AlertState = (props) => {
    const initialState = {
        alert: null
    };

    // eslint-disable-next-line 
    const [state, dispatch] = useReducer(AlertReducer, initialState);


    const showAlert = (msg, type) => {

        dispatch({ type: SET_ALERT, payload: { msg, type } });

        setTimeout(() => { dispatch({ type: SET_ALERT, payload: null }); }, 3000);

    };

    return (
        <AlertContext.Provider value={{
            alert: state.alert,
            showAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
