import './css/yes_no_switch.css';
import React, {useState, useEffect, useRef} from 'react';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

const YES_NO_SWITCH = ({dispatcher}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //States 
    const [value, switchValue] = useState(false);

    useEffect(() => {
        dispatcher(value);
    }, [value]);
    
    return <>
        <div className="switch-field light-container text-light"
        style={{
            ...colorscheme.elements.lightContainer,
            ...colorscheme.elements.textLight
        }}>
            <span className="switch-value value-yes" state={value? 'active' : 'inactive'}
            style={{
                border: `2px solid ${value? colorscheme.elements.globalBorder.borderColor : 'rgba(255, 255, 255, 0)'}`
            }} 
            onClick={() => {
                switchValue(true);
            }}>
                <i className="fas fa-check"></i>
                <p>Yes</p>
            </span>
            <span className="switch-value value-no" state={!value? 'active' : 'inactive'}
            style={{
                border: `2px solid ${!value? colorscheme.elements.globalBorder.borderColor : 'rgba(255, 255, 255, 0)'}`
            }}
            onClick={() => {
                switchValue(false);
            }}>
                <i className="fas fa-times"></i>
                <p>No</p>
            </span>
        </div>
    </>
}

export default YES_NO_SWITCH;