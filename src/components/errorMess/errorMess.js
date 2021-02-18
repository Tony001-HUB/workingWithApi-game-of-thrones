import React from 'react';
import './errorMess.css'

const ErrorMess = () => {
    return(
        <>
        <img src={process.env.PUBLIC_URL + '/img/errorLogo.png'} alt='error'/>
        <span>Something went wrong :(</span>
        </>
    )
}

export default ErrorMess;