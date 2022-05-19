import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useReducer, useRef, useState } from 'react';
import $ from 'jquery';

const PROFILE = () => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    return <>
        <div className="scrolling-content"
        style={{
            height: '500px'
        }}>
            <p>hellow</p>
        </div>    
    </>
}

export default PROFILE;
