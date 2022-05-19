import './css/Select.css';
import {useState, useEffect, Children} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ErrTooltip from './error_tooltip';

const SELECT = ({error = false, name = 'select', height = '35px', width = '250px', values = []}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    
    //State
    const [tooltip, showToltip] = useState(false);

    return <>
        <div className="select" 
        style={{
            flex: `0 1 ${width}`
        }}>
            <select 
            className='global-border text-light'
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
            }}>
                <option value="null">--- Please Select</option>
                {
                    values.map((item, index) => {
                        return <option value={item.value} key={index}>{item.text}</option>
                    })
                }
            </select>
            {error? <ErrTooltip text={error} state={tooltip} /> : ''}
        </div>
    </>
}

export default SELECT;