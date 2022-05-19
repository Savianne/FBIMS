import './css/Input.css';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ErrTooltip from './error_tooltip';

const INPUT = ({error = false, type = 'text', placeholder = '', name = 'input', height = '35px', width = '250px', min_char = 0, max_char = 100, disabled = false }) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //State
    const [tooltip, showToltip] = useState(false);

    return <>
        <div className="input" 
        style={{
            flex: `0 1 ${width}`,
            backgroundColor: disabled? colorscheme.elements.lightContainer.backgroundColor : ''
        }}>
            <input 
            className={error? 'global-border text-light error-field' : 'global-border text-light'}
            type={type} 
            placeholder={placeholder} 
            style={{
                ...colorscheme.elements.globalBorder,
                ...colorscheme.elements.textLight,
                height: height,
            }}
            onFocus={() => {
                showToltip(true);
            }}
            onBlur={() => {
                showToltip(false);
            }}
            disabled={disabled}/>
            {error? <ErrTooltip text={error} state={tooltip} /> : ''}
        </div>
    </>
}

export default INPUT;