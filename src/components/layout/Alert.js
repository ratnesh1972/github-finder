import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {

    const alertContext = useContext(AlertContext);

    const alert = alertContext.alert;
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div >
        )

    )
}
