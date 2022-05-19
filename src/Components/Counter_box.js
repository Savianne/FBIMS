import '../Stylesheets/Counter_box.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

const COUNTER_BOX = ({label = 'Counter', count, color = '#00BCD4', icon}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    return <>
        <div className="counter-box solid-container" style={{
            ...colorscheme.elements.solidContainer,
            backgroundColor: color
        }}>
            <strong>{label}</strong>
            <p className="count">{count}</p>
            <i className={icon + " icn"}></i>
        </div>
    </>
}

export default COUNTER_BOX;
