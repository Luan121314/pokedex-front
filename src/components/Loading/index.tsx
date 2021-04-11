import React from 'react';
import {BoxLoading } from 'react-loadingg';
import "./styles.css";

interface LoadingProps{
    text?:string
}

const Loading = ({text}: LoadingProps)=>{
    return(
        <div className="loading-container">
            <BoxLoading size="large" color="#fff" />
            {text && (
                <h2>{text}</h2>
            )}
        </div>
    )
}

export default Loading;