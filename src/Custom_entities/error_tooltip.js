import './css/error_tooltip.css';
import $ from 'jquery';
import { useEffect,  useRef} from 'react';

const ErrTooltip = ({text, state}) => {

    const self = useRef(null);
    useEffect(() => {
        if(state) $(self.current).fadeIn();
        if(!state) $(self.current).fadeOut();
    }, [state])
    return (
        <span className="tooltip" ref={self}>{text}</span>
    )
}

export default ErrTooltip;