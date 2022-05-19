import { useRef } from "react";
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';
const WARNING_MESSAGE = ({ message, action }) => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //Refs
    const toggle_ref = useRef(null);

    return <>
    <div className="solid-container text-light" style={{
        display: 'flex',
        flex: '0 1 100%',
        maxWidth: '270px',
        minWidth: '230px',
        marginBottom: '10px',
        height: 'fit-content',
        padding: '20px 10px 10px',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap:'wrap',
        ...colorscheme.elements.solidContainer,
        ...colorscheme.elements.textLight
    }} ref={toggle_ref}>
        <div style={{
            flex: '0 1 100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <i className="fas fa-exclamation-circle text-warning"
            style={{...colorscheme.elements.textWarning}}></i>
            <p style={{
                fontSize: '12px',
                marginLeft: '10px'
            }}>{message}</p>
            <i className="fas fa-times icon-toggle" style={{fontSize: '12px'}} onClick={() => {
                $(toggle_ref.current).fadeOut(300);
            }}></i>
        </div>
        <span className="btn action-btn text-primary" style={{
            flex: '0 1 100%',
            marginTop: '10px',
            border: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            ...colorscheme.elements.textPrimary
        }}
        onClick={() => {
            // $(toggle_ref.current).fadeOut(300);
        }}><i className="fas fa-arrow-circle-right" style={{marginRight: '5px'}}></i> Take Action</span>
    </div>
    </>
}

export default WARNING_MESSAGE;