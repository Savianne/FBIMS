import './Members_count.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

const MEMBERS_COUNT_BOX = ({label = 'Counter', total, count, color = '#00BCD4'}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    return <>
        <div className="counter-box solid-container" style={{
            ...colorscheme.elements.solidContainer,
            backgroundColor: color
        }}>
            <strong>{label}</strong>
            <p className="count">{count}</p>
            <i className="fas fa-users icn"></i>
        </div>
    </>
}

export default MEMBERS_COUNT_BOX;
